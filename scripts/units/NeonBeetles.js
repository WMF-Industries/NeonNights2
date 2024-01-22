Events.on(ClientLoadEvent, b  => {
    UnitTypes.merui.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("7485e8");
        w.bullet.backColor = Color.valueOf("7485e8");
        w.bullet.trailColor = Color.valueOf("7485e8");
    })

    UnitTypes.cleroi.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("7485e8");
        w.bullet.trailColor = Color.valueOf("7485e8");
    })

    UnitTypes.anthicus.weapons.each(w => {
        w.bullet.spawnUnit.engineColor = Color.valueOf("7485e8");
        w.bullet.spawnUnit.trailColor = Color.valueOf("7485e8");
    })

    UnitTypes.tecta.weapons.each(w => {
        w.bullet.lightColor = Color.valueOf("7485e8");
        w.bullet.backColor = Color.valueOf("7485e8");
        w.bullet.trailColor = Color.valueOf("7485e8");
    })

    
    UnitTypes.collaris.weapons.each(w => {
        w.bullet.hitColor = Color.valueOf("7485e8");
        w.bullet.backColor = Color.valueOf("7485e8");
        w.bullet.trailColor = Color.valueOf("7485e8");
        w.bullet.lightColor = Color.valueOf("7485e8");
    })
});