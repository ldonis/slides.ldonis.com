<!Doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $Lesli->info->name . ' &bull; ' . $Lesli->info->description; ?></title>
    <?php
    if (ENV == 'live'){
    	echo Html::css();
    }else{
        echo Html::css($Lesli->www->section);
    }
    ?>
</head>
<body>
    <div class="reveal">
        <div class="slides">
        <?php include $content; ?>        
        </div>
    </div>
    <?php echo Html::js('reveal', 'Template'); ?>
    <script>
        Reveal.initialize({
            transition: 'slide'
        });
    </script>
</body>
</html>