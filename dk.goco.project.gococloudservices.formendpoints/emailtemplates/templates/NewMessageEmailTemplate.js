
exports.html = `
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
        <h3 style="margin-left: 20%; font-family: 'Oswald', sans-serif;">New message <span
                style="height: 8px;width: 8px;background-color: red; border-radius: 50%;display: inline-block; margin-bottom: 10px;"></span>
        </h3>
        <div style="width: 60%; margin-left: 20%;">
            <div style="padding: 20px; border: 1px solid gray; border-radius: 0px; " >
                <div style="padding: 10px;" tabindex="0">
                    <div >
                        <h2 >#title#</h2>
                        <h3 >From #from#</h3>
                    </div>
                    <div>#message#</div>
                </div>
                <div >
                    <div >
                        <a href="mailto:#from#" style="text-decoration: none;">
                            <button style="color: red;">Reply</button></a>
                    </div>
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