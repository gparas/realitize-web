// components/SimpleParticleWave.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SimpleParticleWave: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- CONFIGURABLE CONSTANTS ---------------------------

    // VISUALS & DENSITY
    const PARTICLE_COUNT = 1000; // Total number of particles (25 * 25 = 625)
    const GRID_SIZE = 18; // World unit size of the particle grid (e.g., 18x18)
    const DOT_SIZE = 0.05; // Visual size of each individual particle

    // CAMERA & PERSPECTIVE
    const CAMERA_Y_POS = 3; // Camera height (Y-axis). Lower values = more dramatic floor perspective.
    const CAMERA_Z_POS = 13; // Camera distance (Z-axis). Higher values = wider field of view.

    // WAVE CHARACTERISTICS (Adjust these to change wave shape and speed)
    const WAVE_AMPLITUDE = 0.15; // Overall maximum vertical displacement of the wave.
    const WAVE_SPEED = 2.0; // Base speed of the primary wave pattern.
    const WAVE_DENSITY_X = 0.7; // Spatial frequency (tightness) along the X-axis.
    const WAVE_DENSITY_Z = 0.5; // Spatial frequency (tightness) along the Z-axis (depth).

    // Set to 0.0 for a perfectly simple, single sine wave. Increase for more ripple/complexity.
    const WAVE_SCALE_FACTOR = 0.2;

    // GENTLE ROTATION (Set to 0 to disable slow, ambient rotation)
    const ROTATION_SPEED_Z = 0.05; // Slow rotation speed around the Z-axis (screen depth).
    const ROTATION_SPEED_X = 0.02; // Slow rotation speed around the X-axis (forward/backward tilt).

    // ------------------------------------------------------

    // --- 1. SCENE AND RENDERER SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- 2. PARTICLE GEOMETRY (X-Z Plane) ---
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);

    // Grid layout
    const gridResolution = Math.sqrt(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const row = Math.floor(i / gridResolution);
      const col = i % gridResolution;

      // X: Horizontal position (X-axis)
      const x = (col / gridResolution - 0.5) * GRID_SIZE;

      // Z: Depth position (Z-axis) - This forms the "floor" plane with X
      const z = (row / gridResolution - 0.5) * GRID_SIZE;

      // Y is the elevation/height and starts at 0
      positions[i3] = x;
      positions[i3 + 1] = 0; // Y
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = 0; // Y
      originalPositions[i3 + 2] = z;
    }

    // Geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute(
      "originalPosition",
      new THREE.BufferAttribute(originalPositions, 3)
    );

    // Simple points material
    const material = new THREE.PointsMaterial({
      color: 0x7c86ff,
      size: DOT_SIZE, // Use DOT_SIZE constant
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- 3. CAMERA PERSPECTIVE (Low Angle) ---
    // Use CAMERA constants
    camera.position.set(0, CAMERA_Y_POS, CAMERA_Z_POS);
    camera.lookAt(0, 0, 0);

    // --- 4. ANIMATION ---
    const clock = new THREE.Clock();
    const positionAttribute = geometry.getAttribute("position");
    const originalPositionAttribute = geometry.getAttribute("originalPosition");

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Animate particles with wave pattern
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = originalPositionAttribute.getX(i);
        const z = originalPositionAttribute.getZ(i);

        // Primary simple sine wave
        let wave =
          Math.sin(
            x * WAVE_DENSITY_X + z * WAVE_DENSITY_Z + elapsedTime * WAVE_SPEED
          ) * 1.5;

        // Add secondary, complex layers if WAVE_SCALE_FACTOR > 0
        if (WAVE_SCALE_FACTOR > 0) {
          wave +=
            Math.sin(x * 1.3 - z * 0.9 + elapsedTime * 1.3) * WAVE_SCALE_FACTOR;
          wave +=
            Math.sin(x * 2.1 + z * 1.7 + elapsedTime * 0.7) *
            (WAVE_SCALE_FACTOR / 2);
        }

        const elevation = wave * WAVE_AMPLITUDE; // Use WAVE_AMPLITUDE constant

        // Set the Y component (height) for the wave effect
        positionAttribute.setY(i, elevation);
      }

      positionAttribute.needsUpdate = true;

      // Gentle rotation
      particles.rotation.z = Math.sin(elapsedTime * ROTATION_SPEED_Z) * 0.1; // Use ROTATION_SPEED_Z
      particles.rotation.x = Math.sin(elapsedTime * ROTATION_SPEED_X) * 0.05; // Use ROTATION_SPEED_X

      renderer.render(scene, camera);
    };

    animate();

    // --- 5. RESIZE HANDLER ---
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // --- 6. CLEANUP ---
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 190,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default SimpleParticleWave;
