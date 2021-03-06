
exports.html = `
<!--
    parameters has to be ecapsulated by hashtags
    @param title
    @param from
    @param message
-->

<!DOCTYPE html>
<html lang="en">



<body>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

        p,
        h1,
        h2,
        h3,
        h4,
        ol,
        li,
        ul {
            font-family: 'INSERT_FONT_NAME', 'INSERT_A_FALLBACK_FONT';
        }
    </style>

    <div>
        <h1 style="text-align:center; font-family: 'Oswald', sans-serif;"><span style="color: red;">GOCO</span> Cloud
            Services</h1>
        <h3 style="margin-left: 10%; font-family: 'Oswald', sans-serif;">New message <span
                style="height: 8px;width: 8px;background-color: red; border-radius: 50%;display: inline-block; margin-bottom: 10px;"></span>
        </h3>
        <div style="width: 80%; margin-left: 10%;">
            <div style="padding: 10px;">
                <div style="padding: 0px; margin-bottom: 30px;" tabindex="0">
                    <h4 style="color: gray;">From #from#</h4>
                    <h2 style="color: black;">#title#</h2>
                    <div>#message#</div>
                </div>
                <div>
                    <a href="mailto:#from#" style="text-decoration: none;">
                        <button style="color: red;">Reply</button></a>
                </div>
            </div>
        </div>
    </div>
    <div style="margin-top: 100px; margin-left: 20px;">
        <p style="color: gray; font-family: 'Oswald', sans-serif; font-size: 14px;">GOCO Cloud Services - <a
                href="GOCO.DK" style="text-decoration: none; color: gray;">GOCO.DK</a> </p>
    </div>
</body>

</html>
`;