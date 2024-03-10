# Node.js

https://blackgirlbytes.dev/how-to-set-up-a-dev-container-for-a-nextjstypescript-app

Ambiente sviluppo Node.js con Codespace

aggiunto anche codice (nw, electron) per applicazioni desktop da provare su pc con gui


--- installazione novnc
sudo apt update
sudo apt-get install novnc websockify
sudo apt-get install tightvncserver
websockify --web=/usr/share/novnc/ 6080 localhost:5901
http://localhost:6080/vnc.html

sudo nano /etc/systemd/system/novnc.service
[Unit]
Description=Start NoVNC service
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/websockify --web=/usr/share/novnc/ 6080 localhost:5901
Restart=on-failure

[Install]
WantedBy=multi-user.target


sudo systemctl enable novnc.service
sudo systemctl start novnc.service


------------------------------
sudo apt -y install novnc python3-websockify python3-numpy
sudo apt -y install tigervnc-standalone-server
# set VNC password
vncpasswd #(pwd)
# start VNC server with MATE desktop, display number [1], screen resolution [800x600]
# 1024×768, 1280×720, 1920×1080, 2048×1080
tigervncserver -xstartup /usr/bin/mate-session -geometry 1024×768 -localhost no :1
tigervncserver -xstartup /usr/bin/mate-session -localhost no :1
tigervncserver -xstartup /usr/bin/xterm

# to stop VNC session, run like follows
ubuntu@dlp:~$ tigervncserver -kill :1

openssl req -x509 -nodes -newkey rsa:3072 -keyout novnc.pem -out novnc.pem -days 3650
websockify -D --web=/usr/share/novnc/ --cert=/home/ubuntu/novnc.pem 6080 localhost:5901

