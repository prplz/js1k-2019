// https://js1k.com/2015-hypetrain/details/2322
for (a.style.width = a.style.height = '32em',
    I = c.createImageData(256, 256),
    I.data.fill(256),
    A = "RIFF_oO_WAVEfmt " + atob("EAAAAAEAAQBErAAARKwAAAEACABkYXRh"),
    t = 0;
    t++ < 63e4;)
    A += String.fromCharCode(127 + (t / 200 % 2 > 1) * (t / (500 + 500 * Math.cos(t / 1e5)) % 2 > 1) * 33)

setInterval(_ => {
    for (i = ++t % 7; i < 256 * 256; i += 7)
        x = i % 256 - 127,
            y = i / 256 - 127,
            // http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
            k = Math.max(Math.max(Math.abs(x - y), Math.abs(x + y)) - 99, Math.min(Math.abs(x - y), Math.abs(x + y))) % 27 < 20,
            v = Math.sin(x * Math.cos(t / 99) / 33 - y * Math.sin(t / 99) / 33 + y * Math.cos(t / 99) / 33 + x * Math.sin(t / 99) / 33)
            + Math.sin(y / 33)
            + Math.sin(x / 20)
            + Math.sin(Math.hypot(x + 99 * Math.cos(t / 33), y + 99 * Math.sin(t / 33)) / 20)
            + 22 * k,
            I.data[i * 4] = 127 * k + 127 * Math.cos(t / 30 + v),
            I.data[i * 4 + 1] = 127 * k + 127 * Math.cos(t / 10 + v * 2),
            I.data[i * 4 + 2] = 127 * k + 127 * Math.cos(t / 13 + v * 3)
    c.putImageData(I, 0, 0)
}, 33)
A = new Audio("data:audio/wav;base64," + btoa(A))
A.loop = onclick = _ => A.play()