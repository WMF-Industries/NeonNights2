Events.on(ClientLoadEvent, b  => {
    UnitTypes.nova.weapons.each(w => w.bullet.backColor = Color.valueOf("6cf5d7"));
    UnitTypes.pulsar.weapons.each(w => {
        w.bullet.lightningColor = Color.valueOf("6cf5d7");
        w.bullet.hitColor = Color.valueOf("6cf5d7");
    })
    UnitTypes.quasar.weapons.each(w => w.bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")]);
    UnitTypes.vela.weapons.get(0).bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
    UnitTypes.corvus.weapons.get(0).bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
    UnitTypes.corvus.weapons.get(0).bullet.lightColor = Color.valueOf("6cf5d7");
    UnitTypes.corvus.weapons.get(0).bullet.lightningColor = Color.valueOf("6cf5d7");

    UnitTypes.poly.weapons.each(w => {
        w.bullet.backColor = Color.valueOf("6cf5d7");
        w.bullet.trailColor = Color.valueOf("6cf5d7");
    });
    UnitTypes.mega.weapons.each(w => {
        w.bullet.backColor = Color.valueOf("6cf5d7");
    });
    UnitTypes.quad.weapons.get(0).bullet.backColor = Color.valueOf("6cf5d7");

    UnitTypes.retusa.weapons.get(1).bullet.backColor = Color.valueOf("6cf5d7");
    UnitTypes.cyerce.weapons.each(w => {
        if(w.bullet instanceof FlakBulletType){
            w.bullet.backColor = Color.valueOf("6cf5d7");
            w.bullet.lightColor = Color.valueOf("6cf5d7");
            w.bullet.hitEffect.waveColor = Color.valueOf("6cf5d7");
            w.bullet.hitEffect.sparkColor = Color.valueOf("6cf5d7");
            w.bullet.trailColor = Color.valueOf("6cf5d7");
            w.bullet.fragBullet.backColor = Color.valueOf("6cf5d7");
            w.bullet.fragBullet.lightColor = Color.valueOf("6cf5d7");
            w.bullet.fragBullet.trailColor = Color.valueOf("6cf5d7");
        }
    })
    UnitTypes.navanax.weapons.each(w => {
        if(w.bullet instanceof ContinuousLaserBulletType){
            w.bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
        }else w.bullet.backColor = Color.valueOf("6cf5d7");
    })
});