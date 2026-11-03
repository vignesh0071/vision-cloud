import os
import math
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import imageio_ffmpeg
import subprocess

def create_cinematic_loop():
    src_hero = r"C:\Users\Vignesh\.gemini\antigravity\brain\9a09be1d-23bf-4ec2-8cca-56405779a1ea\vision_hero_mocha_1793682759239.jpg"
    src_tech = r"C:\Users\Vignesh\.gemini\antigravity\brain\9a09be1d-23bf-4ec2-8cca-56405779a1ea\vision_tech_mocha_1793682790676.jpg"
    
    img = Image.open(src_hero).convert("RGB")
    tech_img = Image.open(src_tech).convert("RGB")
    
    # Save optimized posters in public/images
    out_img_dir = "public/images"
    os.makedirs(out_img_dir, exist_ok=True)
    out_vid_dir = "public/videos"
    os.makedirs(out_vid_dir, exist_ok=True)
    
    img.save(os.path.join(out_img_dir, "vision-hero-mocha.jpg"), quality=92)
    img.save(os.path.join(out_img_dir, "vision-hero-mocha.webp"), quality=90)
    tech_img.save(os.path.join(out_img_dir, "vision-tech-mocha.jpg"), quality=92)
    tech_img.save(os.path.join(out_img_dir, "vision-tech-mocha.webp"), quality=90)
    
    print("Posters saved successfully.")

    # We will generate a seamless 8-second 30fps loop (240 frames)
    # Using sinusoidal modulation so frame 0 and frame 240 are identical!
    # Camera: Smooth slow dolly push in (1.00 -> 1.05 -> 1.00)
    # Terracotta accent light: pulse along contour
    # Soft volumetric light drift
    
    fps = 30
    duration = 8.0 # seconds
    total_frames = int(fps * duration)
    target_w, target_h = 1920, 1080
    
    # Base array for fast slicing
    orig_w, orig_h = img.size
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    # 1. Desktop Video
    out_desktop = os.path.join(out_vid_dir, "vision-hero-loop.mp4")
    cmd_desktop = [
        ffmpeg_exe,
        '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{target_w}x{target_h}',
        '-pix_fmt', 'rgb24',
        '-r', str(fps),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'fast',
        '-crf', '22',
        '-movflags', '+faststart',
        out_desktop
    ]
    
    print(f"Rendering {total_frames} frames for desktop {target_w}x{target_h}...")
    proc = subprocess.Popen(cmd_desktop, stdin=subprocess.PIPE)
    
    for i in range(total_frames):
        # t goes 0 to 1
        t = i / total_frames
        # smooth sinusoidal phase 0 -> 2pi
        phase = 2 * math.pi * t
        
        # Scale: 1.0 to 1.045 and back to 1.0
        # sin(phase - pi/2) goes from -1 to 1 to -1
        # normalized factor (1 - cos(phase)) / 2 goes from 0 -> 1 -> 0
        s_curve = (1.0 - math.cos(phase)) / 2.0
        zoom = 1.0 + 0.045 * s_curve
        
        # Subtle horizontal pan drift: -10px to +10px
        pan_x = math.sin(phase) * 15.0
        pan_y = math.sin(phase) * 6.0
        
        # Crop window
        crop_w = orig_w / zoom
        crop_h = orig_h / zoom
        
        cx = orig_w / 2.0 + pan_x
        cy = orig_h / 2.0 + pan_y
        
        left = max(0, min(orig_w - crop_w, cx - crop_w / 2.0))
        top = max(0, min(orig_h - crop_h, cy - crop_h / 2.0))
        right = left + crop_w
        bottom = top + crop_h
        
        frame_cropped = img.crop((int(left), int(top), int(right), int(bottom)))
        frame_resized = frame_cropped.resize((target_w, target_h), Image.Resampling.BILINEAR)
        
        # Subtle terracotta luminous warmth breath (subtle color enhancement)
        # Warmth curve: 1.0 to 1.05 and back to 1.0
        if s_curve > 0.01:
            enhancer = ImageEnhance.Color(frame_resized)
            frame_resized = enhancer.enhance(1.0 + 0.06 * s_curve)
        
        proc.stdin.write(frame_resized.tobytes())
        
        if (i + 1) % 40 == 0:
            print(f"  Frame {i+1}/{total_frames} complete")
            
    proc.stdin.close()
    proc.wait()
    print("Desktop video finished:", out_desktop)
    
    # 2. Mobile Video (960x540 for fast loading, ultra smooth)
    mob_w, mob_h = 960, 540
    out_mobile = os.path.join(out_vid_dir, "vision-hero-loop-mobile.mp4")
    cmd_mobile = [
        ffmpeg_exe,
        '-y',
        '-i', out_desktop,
        '-vf', f'scale={mob_w}:{mob_h}',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-preset', 'fast',
        '-crf', '25',
        '-movflags', '+faststart',
        out_mobile
    ]
    subprocess.run(cmd_mobile, check=True)
    print("Mobile video finished:", out_mobile)
    
    # Check sizes
    d_size = os.path.getsize(out_desktop) / (1024 * 1024)
    m_size = os.path.getsize(out_mobile) / (1024 * 1024)
    print(f"Desktop size: {d_size:.2f} MB, Mobile size: {m_size:.2f} MB")

if __name__ == '__main__':
    create_cinematic_loop()
