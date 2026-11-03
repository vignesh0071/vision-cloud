# VISION CLOUD — CINEMATIC VIDEO & ASSET SPECIFICATIONS
## Black & Champagne-Gold Engineering Identity (BuildZo-Inspired Quality)

This document outlines the exact production prompts, technical encoding standards, and animation specifications for Vision Cloud's background cinematic video assets and visual media.

---

## 1. Asset Overview

| Asset Name | Target Resolution | Duration | Frame Rate | Codec | Target File Size | Container |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `vision-hero-loop.mp4` | 2560 × 1440 (16:9) | 10–12 sec | 30 / 60 fps | H.264 / AV1 / ProRes 422 | < 12 MB | MP4 / WebM |
| `vision-technology-loop.mp4` | 2560 × 1440 (16:9) | 8–10 sec | 30 / 60 fps | H.264 / AV1 / ProRes 422 | < 10 MB | MP4 / WebM |

---

## 2. VIDEO 01 — HERO CINEMATIC LOOP

### Target Path
`/public/videos/vision-hero-loop.mp4` (with fallback to `/public/images/vision-hero.webp`)

### Production Prompt
```text
Animate the exact architectural composition from the approved Vision Cloud hero reference image (vision-hero.webp).
Keep the camera composition consistent with the monumental obsidian structure anchored on the right third of the frame, leaving generous negative dark space on the left for typography.
Use a very slow, smooth forward dolly camera movement (0.5% zoom per second).
A fine champagne-gold luminous contour line (#D6B45A / #F1D98B) travels along the architectural seams of the brushed black metallic structure.
As the light travels, subtle volumetric warm champagne-gold reflections glide across the dark brushed titanium facets.
Introduce very subtle atmospheric volumetric fog and realistic global illumination shifts.
Do not rotate the camera or structure. Do not introduce additional objects or characters.
The environment remains deep obsidian black (#050505).
Seamless loop ending where the champagne-gold pulse resets cleanly.
Photorealistic architectural 4K cinematography, 16:9 landscape.
No text, no logos, no watermark.
```

### Technical Parameters
- **Looping**: Seamless loop with 1.5-second crossfade at head/tail.
- **Color Space**: Rec. 709 / sRGB.
- **Video Bitrate**: 6–8 Mbps CRF 20 (web optimized).
- **Audio**: Muted (`muted playsinline loop`).

---

## 3. VIDEO 02 — TECHNOLOGY LIGHT MOVEMENT

### Target Path
`/public/videos/vision-technology-loop.mp4` (with fallback to `/public/images/vision-about-02.webp`)

### Production Prompt
```text
Cinematic macro view of a precision brushed black titanium technological structure.
A champagne-gold luminous conduit (#D6B45A) gently pulses with energy, casting moving specular reflections across microscopic brushed metal grain and chamfered edges.
Extremely shallow depth of field with slow rack focus along the illuminated seam.
Deep black shadows (#050505) with high dynamic contrast.
Slow, controlled micro-motion without abrupt pans or shakes.
Seamless 8–10 second loop.
No text, no logos, no watermark.
```

---

## 4. Frontend Integration Architecture

The Vision Cloud Hero and Sticky Storytelling sections are built with progressive enhancement:
1. If the `.mp4` video file is placed in `/public/videos/vision-hero-loop.mp4`, the `<video>` element plays automatically on autoplay, muted, loop, and playsinline.
2. If the video file is not yet deployed, the component seamlessly displays the photorealistic `/public/images/vision-hero.webp` image with hardware-accelerated CSS ambient micro-zoom (`subtleZoom` animation) and champagne-gold ambient glow, ensuring zero broken elements or missing media.
