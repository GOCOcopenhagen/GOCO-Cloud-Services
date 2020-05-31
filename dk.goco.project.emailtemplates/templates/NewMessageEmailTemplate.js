
exports.html = `
<!--
    parameters has to be ecapsulated by hashtags
    @param title
    @param from
    @param message
-->

<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
</head>

<body>
    <div>
        <h1 style="text-align:center; font-family: 'Oswald', sans-serif;"><span style="color: red;">GOCO</span> Cloud
            Services</h1>
        <h3 style="margin-left: 20%; font-family: 'Oswald', sans-serif;">New message <span
                style="height: 8px;width: 8px;background-color: red; border-radius: 50%;display: inline-block; margin-bottom: 10px;"></span>
        </h3>
        <div style="width: 60%; margin-left: 20%;">
            <div style="padding: 0;" class="mdc-card demo-card">
                <div style="padding: 10px;" class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                    <div class="demo-card__primary">
                        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">#title#</h2>
                        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">from #from#</h3>
                    </div>
                    <div class="demo-card__secondary mdc-typography mdc-typography--body2">#message#</div>
                </div>
                <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                        <a href="mailto:#from#" style="text-decoration: none;"><button
                                class="mdc-button mdc-card__action mdc-card__action--button" style="color: red;"> <span
                                    class="mdc-button__ripple"></span>Reply</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="margin-top: 100px; margin-left: 20px;">
        <p style="color: gray; font-family: 'Oswald', sans-serif; font-size: 14px;">GOCO Cloud Services - <a href="GOCO.DK" style="text-decoration: none; color: gray;">GOCO.DK</a> </p>
    </div>
</body>

</html>
`;