function resetJjals(callback)
{
	chrome.storage.local.get("jjals", function(items) {
		var defaultJjals = ['http://i.imgur.com/cn7QOaW.png', 'http://i.imgur.com/OiBRlw9.png',
							'http://i.imgur.com/209M28V.png', 'http://i.imgur.com/f6z4ZJb.png',
							'http://i.imgur.com/vFBgCih.png', 'http://i.imgur.com/pHXQMOV.png',
							'http://i.imgur.com/keXmiA3.png', 'http://i.imgur.com/LZu0BTJ.png',
							'http://i.imgur.com/rVZ6e6T.png', 'http://i.imgur.com/1vS8Cds.png',
							'http://i.imgur.com/DVpSJdk.png', 'http://i.imgur.com/BnGNj7p.png',
							'http://i.imgur.com/sUfc1RA.png', 'http://i.imgur.com/whDkOfU.png',
							'http://i.imgur.com/f4d02yK.png', 'http://i.imgur.com/OPKvJEs.png',
							'http://i.imgur.com/z54kM2q.png', 'http://i.imgur.com/k90QIBV.png',
							'http://i.imgur.com/dYSEPNb.png', 'http://i.imgur.com/51adQbx.png',
							'http://i.imgur.com/QHGxXJS.png', 'http://i.imgur.com/Be7G3d0.png',
							'http://i.imgur.com/zaNVKo2.png', 'http://i.imgur.com/MZpQdPD.png',
							'http://i.imgur.com/Q3oNbEy.png', 'http://i.imgur.com/m38yL7v.png',
							'http://i.imgur.com/SukljFr.png', 'http://i.imgur.com/01UqUQU.png',
							'http://i.imgur.com/vtzKdJy.png', 'http://i.imgur.com/wkaX2VL.png',
							'http://i.imgur.com/7lHYvqN.png', 'http://i.imgur.com/8ruvQa9.png',
							'http://i.imgur.com/7SMhWTj.png', 'http://i.imgur.com/vJSJQz1.png',
							'http://i.imgur.com/a7d6JVC.png', 'http://i.imgur.com/mJkHPTi.png',
							'http://i.imgur.com/JzDGrvL.png', 'http://i.imgur.com/DJIqw4H.png',
							'http://i.imgur.com/e7I2gYC.png', 'http://i.imgur.com/54lSFdJ.png',
							'http://i.imgur.com/oCndH3h.png', 'http://i.imgur.com/mjTFXoL.png',
							'http://i.imgur.com/wgao0R8.jpg', 'http://i.imgur.com/k8mB0ms.png',
							'http://i.imgur.com/JBDnA0h.png', 'http://i.imgur.com/nc2sKjO.png',
							'http://i.imgur.com/KKzUkpY.png', 'http://i.imgur.com/VawZh8T.png',
							'http://i.imgur.com/vdbAZCx.png',
							'http://i.imgur.com/i1C0vDj.png', 'http://i.imgur.com/9qwf0Fb.png',
							'http://i.imgur.com/d9Kfc4X.png', 'http://i.imgur.com/34GAAFj.jpg',
							'http://i.imgur.com/h0qhAT6.png', 'http://i.imgur.com/PMa6KUs.png',
							'http://i.imgur.com/SBemsD4.png', 'http://i.imgur.com/XKcScn6.png',
							'http://i.imgur.com/cRpXgbP.png', 'http://i.imgur.com/CgjMPnh.png',
							'http://i.imgur.com/qC9GwgE.png', 'http://i.imgur.com/pv0LySM.png',
							'http://i.imgur.com/rgHoQoS.png', 'http://i.imgur.com/qZbIeoe.png',
							'http://i.imgur.com/gfXEqe9.png', 'http://i.imgur.com/taSiLzk.png',
							'http://i.imgur.com/YB4fxcK.png', 'http://i.imgur.com/kFAOb5m.png',
							'http://i.imgur.com/5XnWfLZ.png', 'http://i.imgur.com/enLoyWR.png',
							'http://i.imgur.com/KHQe86E.png', 'http://i.imgur.com/FPCsToA.png',
							'http://i.imgur.com/3PduKPm.png', 'http://i.imgur.com/ysiFQls.png',
							'http://i.imgur.com/DwLyhvU.png', 'http://i.imgur.com/NQLniV9.png',
							'http://i.imgur.com/sV6CoLD.png', 'http://i.imgur.com/r4aJzAF.png',
							'http://i.imgur.com/ZBLswRI.png', 'http://i.imgur.com/hITMJDh.png',
							'http://i.imgur.com/gfUYqJA.png', 'http://i.imgur.com/mrpAO0c.png',
							'http://i.imgur.com/SrIXRcM.png'];

		var jjals = items.jjals;
		if (jjals == undefined || jjals.length == 0) {
			chrome.storage.local.set({"jjals": defaultJjals});
		    callback(defaultJjals);
		    return;
		}

		for (var i = 0; i < defaultJjals.length; i++) {
			if (jjals.indexOf(defaultJjals[i]) == -1) {
			    jjals.push(defaultJjals[i]);
			}
		};

		chrome.storage.local.set({"jjals": jjals});
		callback(jjals);
	});
}