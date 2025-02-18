# Setting up Chromium in WSL

## Installation Steps

1. Update package list and install Chromium:
```bash
sudo apt update
sudo apt install chromium-browser
```

2. If you encounter any missing dependencies, install them:
```bash
sudo apt install -y chromium-codecs-ffmpeg
```

3. For better display handling, install these packages:
```bash
sudo apt install -y x11-apps mesa-utils
```

## Configuration

1. Add this to your `~/.bashrc` or `~/.zshrc`:
```bash
export DISPLAY=:0
```

2. On Windows, install VcXsrv or X410
   - Download VcXsrv from: https://sourceforge.net/projects/vcxsrv/
   - Start XLaunch
   - Choose "Multiple windows"
   - Set "Display number" to 0
   - Select "Start no client"
   - Check "Disable access control"

3. Test the setup:
```bash
chromium-browser --no-sandbox
```

## Troubleshooting

If you encounter issues:

1. Check X Server:
```bash
echo $DISPLAY
xeyes  # Should show a pair of eyes if X11 forwarding works
```

2. Firewall settings:
- Allow VcXsrv through Windows Firewall
- Add inbound rule for TCP port 6000

3. Common fixes:
```bash
# If you get "Failed to open connection to "x"" error
export LIBGL_ALWAYS_INDIRECT=1

# If you get sandbox errors
chromium-browser --no-sandbox
```

## Using with Marp

1. Start VcXsrv first
2. In WSL terminal:
```bash
export DISPLAY=:0
marp slides.md --preview
```

The preview should open in Chromium browser within WSL.