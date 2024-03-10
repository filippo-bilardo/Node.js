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
