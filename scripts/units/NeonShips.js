Events.on(ClientLoadEvent, b  => {
    UnitTypes.elude.parts.each(p => p.color = Color.valueOf("f17afa"));
    UnitTypes.elude.abilities.each(a => a.color = Color.valueOf("f17afa"));
    UnitTypes.elude.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("d17aff");
        w.bullet.backColor = Color.valueOf("d17aff");
        w.bullet.trailColor = Color.valueOf("d17aff");
    })

    UnitTypes.avert.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("d17aff");
        w.bullet.backColor = Color.valueOf("d17aff");
        w.bullet.trailColor = Color.valueOf("d17aff");
    })

    UnitTypes.obviate.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("f17afa");
        w.bullet.intervalBullet.lightningColor = Color.valueOf("f17afa");
        w.bullet.lightningColor = Color.valueOf("f17afa");
        w.bullet.despawnEffect.waveColor = Color.valueOf("f17afa");
        w.bullet.despawnEffect.sparkColor = Color.valueOf("814c9e");
        w.bullet.hitEffect.waveColor = Color.valueOf("f17afa");
        w.bullet.hitEffect.sparkColor = Color.valueOf("814c9e");
        w.bullet.backColor = Color.valueOf("8743bf");
        w.bullet.frontColor = Color.valueOf("f17afa");
        w.bullet.trailColor = Color.valueOf("8743bf");
    })

    UnitTypes.quell.abilities.each(a => {
        a.color = Color.valueOf("d17aff");
        a.particleColor = Color.valueOf("814c9e");
    })
    UnitTypes.quell.weapons.each(w => {
        w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf");
        w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf");
    })

    UnitTypes.disrupt.abilities.each(a => {
        a.color = Color.valueOf("d17aff");
        a.particleColor = Color.valueOf("814c9e");
    })
    UnitTypes.disrupt.weapons.each(w => {
        w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf");
        w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf");
    })
});