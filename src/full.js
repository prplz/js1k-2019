n = document.createElement('canvas'),
    o = n.getContext`2d`,
    I = c.createImageData(256, 256),
    I.data.fill(t = n.width = n.height = 256)

setInterval(_ => {
    for (i = ++t % 7; i < 256 * 256; i += 7)
        x = i % 256 - 128,
            y = i / 256 - 128,
            // http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
            k = Math.abs(30 - Math.max(Math.max(Math.abs(x - y), Math.abs(x + y)) - 99, Math.min(Math.abs(x - y), Math.abs(x + y)))) > 10,
            v = Math.sin(x * Math.cos(t / 99) / 33 - y * Math.sin(t / 99) / 33 + y * Math.cos(t / 99) / 33 + x * Math.sin(t / 99) / 33)
            + Math.sin(y / 33)
            + Math.sin(x / 20)
            + Math.sin(Math.hypot(x + 99 * Math.cos(t / 33), y + 99 * Math.sin(t / 33)) / 20),
            I.data[i * 4] = 127 * k + 127 * Math.cos(t / 30 + v + 22 * k),
            I.data[i * 4 + 1] = 127 * k + 127 * Math.cos(t / 10 + v * 2 + 22 * k),
            I.data[i * 4 + 2] = 127 * k + 127 * Math.cos(t / 13 + v * 3 + 22 * k)

    o.putImageData(I, 0, 0)

    c.resetTransform()
    c.globalAlpha = 1
    c.fillRect(0, 0, a.width, a.height)

    // front/back
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        a.width / 2 + Math.sin(t / 33 /*yaw*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        a.height / 2 - Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.cos(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/))
    c.filter = 'hue-rotate(0deg)'
    c.drawImage(n, -128, -128)

    // left/right
    c.setTransform(
        -Math.sin(t / 33 /*yaw*/),
        Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        0,
        Math.cos(t / 99 /*pitch*/),
        a.width / 2 - Math.cos(t / 33 /*yaw*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128,
        a.height / 2 - Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.sin(t / 33 /*yaw*/) * Math.cos(t / 99 /*pitch*/))
    c.filter = 'hue-rotate(120deg)'
    c.drawImage(n, -128, -128)

    // top/bottom
    c.setTransform(
        Math.cos(t / 33 /*yaw*/),
        Math.sin(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        Math.sin(t / 33 /*yaw*/),
        -Math.cos(t / 33 /*yaw*/) * Math.sin(t / 99 /*pitch*/),
        a.width / 2,
        a.height / 2 + Math.cos(t / 99 /*pitch*/) * Math.sign(Math.sin(t / 99 /*pitch*/)) * 128)
    c.globalAlpha = Math.abs(Math.sin(t / 99 /*pitch*/))
    c.filter = 'hue-rotate(250deg)'
    c.drawImage(n, -128, -128)
}, 33)