(function () {
    'use strict';

    var level = document.querySelector('#level');
    var batteryColor = document.querySelector('#battery');

    window.navigator.getBattery().then(function (battery) {
        function updateAllBatteryInfo() {
            updateChargeInfo();
            updateLevelInfo();
            updateBatteryColor();
        }
        updateAllBatteryInfo();

        battery.addEventListener('chargingchange', function () {
            updateChargeInfo();
            updateBatteryColor();
        });
        function updateChargeInfo() {
            // charging.textContent = battery.charging ? "Charging..." : "Unplugged";
            console.log("Battery charging? " + (battery.charging ? "Charging..." : "Unplugged"));
        }

        battery.addEventListener('levelchange', function () {
            updateLevelInfo();
            updateBatteryColor();
        });
        function updateLevelInfo() {
            level.textContent = battery.level * 100 + "%";
            console.log("Battery level: " + battery.level * 100 + "%");
        }
        function updateBatteryColor () {
            if (battery.charging) {
                batteryColor.classList.remove(batteryColor.classList[0]);
                batteryColor.classList.add('ion-battery-charging');
            }

            if (battery.level * 100 >= 80 && !battery.charging) {
                batteryColor.classList.remove(batteryColor.classList[0]);
                batteryColor.classList.add('ion-battery-full');
            }

            if (battery.level * 100 >= 50 && battery.level * 100 < 80 && !battery.charging) {
                batteryColor.classList.remove(batteryColor.classList[0]);
                batteryColor.classList.add('ion-battery-half');
            }

            if (battery.level * 100 <= 20 && !battery.charging) {
                batteryColor.classList.remove(batteryColor.classList[0]);
                batteryColor.classList.add('ion-battery-low');
            }

            if (battery.level * 100 <= 7 && !battery.charging) {
                batteryColor.classList.remove(battery.classList[0]);
                batteryColor.classList.add('ion-battery-empty');
            }
        }
    });
}()); 
