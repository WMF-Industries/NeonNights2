Events.on(ClientLoadEvent, b  => {
    UnitTypes.spiroct.weapons.forEach(w => {
        w.bullet.hitColor = Color.valueOf("f17afa")
        w.bullet.color = Color.valueOf("f17afa");
    });

    UnitTypes.arkyid.weapons.forEach(w => {
        if(w.bullet instanceof SapBulletType){
            w.bullet.hitColor = Color.valueOf("f17afa");
            w.bullet.color = Color.valueOf("f17afa");
        }else{
            w.bullet.frontColor = Color.valueOf("f17afa");
            w.bullet.lightningColor = Color.valueOf("f17afa");
            w.bullet.backColor = Color.valueOf("7343bf");
            w.bullet.trailColor = Color.valueOf("7343bf");
        }
    })

    UnitTypes.toxopid.weapons.forEach(w => {
        if(w.bullet instanceof ShrapnelBulletType){
            w.bullet.fromColor = Color.valueOf("f17afa");
            w.bullet.toColor = Color.valueOf("7343bf");
        }else{
            w.bullet.frontColor = Color.valueOf("f17afa");
            w.bullet.lightningColor = Color.valueOf("f17afa");
            w.bullet.lightColor = Color.valueOf("814c9e");
            w.bullet.trailColor = Color.valueOf("7343bf");
            w.bullet.fragBullet.lightningColor = Color.valueOf("f17afa");
            w.bullet.fragBullet.backColor = Color.valueOf("7343bf");
            w.bullet.fragBullet.trailColor = Color.valueOf("7343bf");
            w.bullet.fragBullet.lightColor = Color.valueOf("814c9e");
        }
    })
});