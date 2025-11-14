// components/SimpleParticleWave.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Wave: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Cache container dimensions to avoid forced reflows
    let cachedRect = container.getBoundingClientRect();
    let cachedWidth = container.clientWidth;
    let cachedHeight = container.clientHeight;

    // --- CONFIGURABLE CONSTANTS ---------------------------

    // VISUALS & DENSITY
    const PARTICLE_COUNT = 1500;
    const GRID_SIZE = 18;
    const DOT_SIZE = 0.05;

    // CAMERA & PERSPECTIVE
    const CAMERA_Y_POS = 2.5;
    const CAMERA_Z_POS = 12.5;

    // WAVE CHARACTERISTICS
    const WAVE_AMPLITUDE = 0.15;
    const WAVE_SPEED = 2.0;
    const WAVE_DENSITY_X = 0.7;
    const WAVE_DENSITY_Z = 0.3;
    const WAVE_SCALE_FACTOR = 0.2;

    // AMBIENT ROTATION
    const ROTATION_SPEED_Z = 0.05;
    const ROTATION_SPEED_X = 0.02;

    // (Optional) Gaussian bump (additive)
    const ENABLE_BUMP = false;
    const BUMP_STRENGTH = 0.25;
    const BUMP_RADIUS = 1.6;
    const BUMP_EASE = 0.12;

    // --- SPHERICAL *DENT* (inverse of dome) ---
    const ENABLE_SPHERE_DENT = true;
    const DENT_RADIUS = 5; // area of influence
    const DENT_DEPTH = 1.5; // how deep the center dips below y=0
    const DENT_STRENGTH = 0.95; // 0..1 blend toward the sphere
    const DENT_EASE = 0.12; // ease in/out speed
    // ------------------------------------------------------

    // --- 1. SCENE & RENDERER ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      cachedWidth / cachedHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(cachedWidth, cachedHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- 2. PARTICLE GEOMETRY ---
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);
    const gridResolution = Math.sqrt(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const row = Math.floor(i / gridResolution);
      const col = i % gridResolution;

      const x = (col / gridResolution - 0.5) * GRID_SIZE;
      const z = (row / gridResolution - 0.5) * GRID_SIZE;

      positions[i3] = x;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = 0;
      originalPositions[i3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute(
      "originalPosition",
      new THREE.BufferAttribute(originalPositions, 3),
    );

    const material = new THREE.PointsMaterial({
      color: 0x7c86ff,
      size: DOT_SIZE,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- 3. CAMERA ---
    camera.position.set(0, CAMERA_Y_POS, CAMERA_Z_POS);
    camera.lookAt(0, 0, 0);

    // --- 4. INTERACTION (mouse -> XZ plane) ---
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // y=0
    const mouseWorld = new THREE.Vector3();
    let hasHover = false;
    let bumpMix = 0;
    let dentMix = 0;

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect(); // <— fresh every time

      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((clientY - rect.top) / rect.height) * 2 + 1;

      mouseNDC.set(x, y);
      raycaster.setFromCamera(mouseNDC, camera);
      raycaster.ray.intersectPlane(groundPlane, mouseWorld);
    };

    const onPointerMove = (e: PointerEvent) => {
      hasHover = true;
      updateMouse(e.clientX, e.clientY);
    };
    const onPointerEnter = (e: PointerEvent) => {
      hasHover = true;
      updateMouse(e.clientX, e.clientY);
    };
    const onPointerLeave = () => {
      hasHover = false;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    // Touch
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        hasHover = true;
        const t = e.touches[0];
        updateMouse(t.clientX, t.clientY);
      }
    };
    const onTouchEnd = () => {
      hasHover = false;
    };
    container.addEventListener("touchstart", onTouch, { passive: true });
    container.addEventListener("touchmove", onTouch, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    // --- 5. ANIMATION ---
    const clock = new THREE.Clock();
    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const origAttr = geometry.getAttribute(
      "originalPosition",
    ) as THREE.BufferAttribute;

    // Bump precompute
    const twoSigmaSq = 2 * BUMP_RADIUS * BUMP_RADIUS;

    // For the dent, we want the *lower* hemisphere:
    // Put the sphere center slightly ABOVE the plane so y at center = -DENT_DEPTH.
    // y_at_center = cy - R = -DENT_DEPTH  =>  cy = R - DENT_DEPTH
    const sphereRadius = DENT_RADIUS;
    const sphereCenterY = sphereRadius - DENT_DEPTH;

    const smoothstep = (e0: number, e1: number, x: number) => {
      const t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1);
      return t * t * (3 - 2 * t);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const target = hasHover ? 1 : 0;
      if (ENABLE_BUMP) bumpMix += (target - bumpMix) * BUMP_EASE;
      if (ENABLE_SPHERE_DENT) dentMix += (target - dentMix) * DENT_EASE;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = origAttr.getX(i);
        const z = origAttr.getZ(i);

        // Base wave
        let y =
          Math.sin(x * WAVE_DENSITY_X + z * WAVE_DENSITY_Z + t * WAVE_SPEED) *
          1.5 *
          WAVE_AMPLITUDE;

        if (WAVE_SCALE_FACTOR > 0) {
          y +=
            Math.sin(x * 1.3 - z * 0.9 + t * 1.3) *
            WAVE_SCALE_FACTOR *
            WAVE_AMPLITUDE;
          y +=
            Math.sin(x * 2.1 + z * 1.7 + t * 0.7) *
            (WAVE_SCALE_FACTOR / 2) *
            WAVE_AMPLITUDE;
        }

        if (Number.isFinite(mouseWorld.x) && Number.isFinite(mouseWorld.z)) {
          const dx = x - mouseWorld.x;
          const dz = z - mouseWorld.z;
          const dist2 = dx * dx + dz * dz;
          const dist = Math.sqrt(dist2);

          // Optional Gaussian bump (upwards)
          if (ENABLE_BUMP && bumpMix > 0.001) {
            const infl = Math.exp(-dist2 / twoSigmaSq);
            y += BUMP_STRENGTH * bumpMix * infl;
          }

          // Spherical dent (concave)
          if (ENABLE_SPHERE_DENT && dentMix > 0.001 && dist < sphereRadius) {
            // Lower hemisphere surface: y_sphere = cy - sqrt(R^2 - r^2)
            const inside = sphereRadius * sphereRadius - dist2;
            if (inside > 0) {
              const ySphere = sphereCenterY - Math.sqrt(inside);

              // Edge falloff so it blends into the plane/wave
              const edge = smoothstep(sphereRadius, 0, dist); // 1 at center -> 0 at edge
              const influence = edge * DENT_STRENGTH * dentMix;

              y = THREE.MathUtils.lerp(y, ySphere, influence);
            }
          }
        }

        posAttr.setY(i, y);
      }

      posAttr.needsUpdate = true;

      // Ambient rotation
      const elapsed = t;
      particles.rotation.z = Math.sin(elapsed * ROTATION_SPEED_Z) * 0.1;
      particles.rotation.x = Math.sin(elapsed * ROTATION_SPEED_X) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- 6. RESIZE ---
    const handleResize = () => {
      cachedWidth = container.clientWidth;
      cachedHeight = container.clientHeight;
      cachedRect = container.getBoundingClientRect();

      camera.aspect = cachedWidth / cachedHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(cachedWidth, cachedHeight);
    };

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Fallback for window resize
    window.addEventListener("resize", handleResize);

    // --- 7. CLEANUP ---
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("touchstart", onTouch);
      container.removeEventListener("touchmove", onTouch);
      container.removeEventListener("touchend", onTouchEnd);
      if (container && renderer.domElement)
        container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="select-none"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 190,
        left: 0,
        zIndex: 1,
      }}
    />
  );
};

export default Wave;
