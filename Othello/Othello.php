<!--
File: High_Scores.html 
Authors: Terrence Tan, Peter Zhang, Stephen Morse, Pratap Luitel
last updated: 3/18/14

-->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Othello</title>
        <link href="../style.css" type="text/css" rel="stylesheet" />
            <script type="text/javascript" src="lib/prototype.js"></script>
            <script type="text/javascript" src="HumanPlayer.js"></script>
            <script type="text/javascript" src="OthelloBoard.js"></script>
            <script type="text/javascript" src="OthelloTile.js"></script>
            <script type="text/javascript" src="OthelloView.js"></script>
            <script type="text/javascript" src="OthelloController.js"></script>
    </head>

    <body>

<?php
    $xo = 150;
    $yo = 15;
    $width = 60;
    $numRows = 8;
    $numCols = 8;
?>
        <div class="blueBackground">
        
        <header>
            <h1>Othello</h1>
        </header>
        <nav>
            <ul>
                <li><a href="../Home.php">Home</a></li>
                <li><a href="../Directions.html">Directions</a></li>
                <li><a href="../Contact.html">Contact Info</a></li>
                <li><a href="../Pictures.html">Picture Collage</a></li>
                <li class="selectedTab"><a href="#">Othello</a></li>
                <li><a href="../faq.php">FAQs</a></li>
            </ul>
        </nav>
        
        <aside>
            <p>
                <h2>Useful Links</h2>
            </p>
            <hr/>
            <section>    
                <p><a href="http://www.boardgamesfor.me/">Discover New Games</a></p>
                <p><a href = "http://www.amazon.com/Mattel-R1983-Othello-Game/dp/B001P06GX4">Buy The Game</a></p>
                <p><a href="http://radagast.se/othello/Help/strategy.html">Othello Strategy</a></p>
            </section>
        </aside>
        
        <div id="content">

    <svg xmlns = "http://www.w3.org/2000/svg" id = "drawingBoard" 
            width = "<?php echo ($xo + $numCols * $width);?>" 
            height = "<?php echo ($yo + $numRows * $width);?>">
    </svg>
            <script>
                var numRows = <?php echo $numRows?>;
                var numCols = <?php echo $numCols?>;
                var sideLength = <?php echo $width?>;
                var xo = <?php echo $xo?>;
                var yo = <?php echo $yo?>;
                </script>
            <script type="text/javascript" src="./Main.js"></script>

        </div>
        <footer>
        <hr />
        <p>
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
                <img style="border:0;width:88px;height:31px"
                    src="http://jigsaw.w3.org/css-validator/images/vcss"
                    alt="Valid CSS!" />
            </a>
        </p>
        </footer>
        </div>
    
    </body>
</html>








