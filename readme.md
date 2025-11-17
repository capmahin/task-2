# Three.js 3D Playground Project

This project is a comprehensive 3D playground built with Three.js and Vite, featuring interactive 3D objects, dynamic lighting, and real-time controls.

## Project Overview

This is a starter template for building interactive 3D applications using Three.js and Vite. The project demonstrates core 3D concepts including scene setup, geometric objects, lighting, materials, shadows, and interactive controls.

## Key Features Implemented

### Core 3D Scene Architecture
- Created a complete Three.js scene with camera, renderer, and orbit controls
- Implemented responsive design that adapts to window resizing
- Configured WebGL renderer with shadow mapping enabled for realistic lighting effects
- Set up perspective camera with optimal field of view and clipping planes

### Geometric Objects & Materials
- Built three distinct 3D objects:
  - **Sphere**: Green sphere positioned on the left side
  - **Box**: Green cube positioned at the center
  - **Torus**: Green torus (donut shape) positioned on the right side
- Applied physically-based MeshStandardMaterial with customizable roughness and metalness properties
- Enabled cast and receive shadow properties for all objects for realistic lighting interactions
- Created a ground plane using PlaneGeometry for objects to rest on

### Advanced Lighting System
- Integrated multiple light sources for dynamic scene illumination:
  - **Ambient Light**: Provides overall scene illumination (soft white light at 50% intensity)
  - **Directional Light**: Simulates sunlight with positionable shadow casting
  - **Point Light**: Emulates light bulb effect with radial illumination and shadow casting
- Added real-time light control through GUI with adjustable parameters:
  - Intensity controls (0-2 for ambient/directional, 0-3 for point light)
  - Position controls for directional and point lights (X, Y, Z axes)
  - Visibility toggles for each light source

### Interactive User Interface
- Integrated lil-gui for real-time parameter adjustment
- Organized controls into logical folders:
  - Ambient Light controls
  - Directional Light controls
  - Point Light controls
  - Material property controls
- Enabled live tweaking of material properties (roughness and metalness)

### Camera & Navigation
- Implemented OrbitControls for intuitive camera movement:
  - Pan, zoom, and rotate around the scene
  - Initial camera position set for optimal viewing angle
- Added automatic resize handling to maintain aspect ratio on window resize

### Performance & Optimization
- Utilized Vite for fast development server with hot module replacement
- Optimized render loop using requestAnimationFrame for smooth animations
- Configured proper shadow mapping for realistic lighting effects without performance overhead

## Technical Implementation Details

### Dependencies & Frameworks
- **Three.js**: Core 3D library for rendering and scene management
- **Vite**: Build tool and development server for fast development
- **lil-gui**: Lightweight GUI library for interactive controls
- **ES Modules**: Modern JavaScript module system for clean code organization

### File Structure
- `src/index.html`: Main HTML entry point with canvas element
- `src/script.js`: Complete Three.js scene implementation
- `src/style.css`: Basic styling for fullscreen canvas
- `vite.config.js`: Vite configuration for source directory and base path

### Development Workflow
- Real-time development server with hot reloading
- Modular code organization following Three.js best practices
- Responsive design that works across different screen sizes

## How to Use This Project

### Prerequisites
- Node.js installed on your machine

### Installation
1. Clone or download this project
2. Navigate to the project directory in your terminal
3. Run `npm install` to install dependencies

### Running the Development Server
1. Execute `npm run dev` to start the development server
2. The browser will automatically open to your localhost
3. The server features hot reloading for instant code updates

### Interacting with the 3D Scene
- Use mouse/touch to orbit around the scene
- Scroll/pinch to zoom in and out
- Right-click/drag to pan the view
- Adjust parameters in the GUI panel to modify lighting and material properties

## Customization Points

This project serves as an excellent foundation for:
- Product visualization applications
- Interactive 3D dashboards
- Educational 3D demonstrations
- Prototyping 3D user interfaces
- Experimenting with advanced Three.js features

The modular structure makes it easy to extend with additional geometries, textures, animations, or post-processing effects.
For further customization, you can modify the scene, lighting, and material properties in the `src/script.js` file.
