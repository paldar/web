<!DOCTYPE HTMl>
<html>
    <head>
        <meta charset ="utf-8">
        <link href="style.css" type="text/css" rel="stylesheet">
        <title>
            Play Othello Online
        </title>     
    </head>
    
    <body>
    <div class="blueBackground">
        <header>
            <h1>Othello</h1>
        </header>
        
        <nav>
            <ul>
                <li class="selectedTab"><a href="Home.php">Home</a></li>
                <li><a href="Directions.html">Directions</a></li>
                <li><a href="Contact.html">Contact Info</a></li>
                <li><a href="Pictures.html">Picture Collage</a></li>
            <li><a href="Othello/Othello.php">Play Othello!</a></li>
            <li><a href="faq.php">FAQs</a></li>
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
            <hr/>
            <?php
                $hits = file_get_contents("hits.txt")+1;
                file_put_contents("hits.txt",$hits);
                echo("<p> <span class =\"whiteText\">Total Page Visits: ". $hits."</p> </span>");

    $file = "ip.txt";
    $arr = file($file);
        $newName = $_SERVER['REMOTE_ADDR'];
        $myGuests = file_get_contents($file);
        if(!in_array($newName."\n", $arr))
        {
            $myGuests = $myGuests.$newName."\n";
            array_push($arr, $newName);
            file_put_contents("ip.txt",$myGuests);

        }
        
        echo("<p> <span class =\"whiteText\">Unique Page Visits: ". sizeof($arr)."</p> </span>");
        ?>
        <hr/>
        <p class = "whiteText">Rate The Page</p>
         

        <form action="Home.php">
        <select name="rating">
        <?php
        for($i = 1; $i < 6; $i++){    
            echo("<option value=\"".$i."\">". $i."</option>");
        }
        ?>
        </select>
        <input type="submit" value="submit" >
        </form>
        </section>

        <?php
            $newRating = $_GET["rating"];
            if($newRating != null)
            {
                $ratings = file_get_contents("rating.txt");
                if (trim($ratings) == '')
                    file_put_contents("rating.txt",$newRating."\n");
                else
                    file_put_contents("rating.txt",$ratings.$newRating."\n");
            }
            
            $arr = file("rating.txt");
            $mean = number_format((float)array_sum($arr)/sizeof($arr), 2, '.', '');
            $min = min($arr);
            $max = max($arr);
            echo("<p class = \"whiteText\"> Mean Rating: ".$mean. "</p>");
            echo("<p class = \"whiteText\"> Min Rating: ".$min. "</p>");
            echo("<p class = \"whiteText\"> Max Rating: ".$max. "</p>");
            
        ?>
        </aside>
        <div id ="content">
        <img src="http://priorypost.files.wordpress.com/2012/04/othello.jpeg" 
                    title="Othello"
                    alt="Image of Othello in action"
                    class="blokus_img"> 
        
        <h2>
            SITE UNDER CONSTRUCTION!
        </h2>
        
        <p> 
            Othello is a strategy game for the whole family, and we
            are proud to present our own virtual implementation of 
            this game.
        </p>
        <p>
        Othello (like the Moor from the Shakespeare play) is an abstract strategy board
        game for two to four players, invented by Bernard Tavitian and first
        released in 2000 by Sekkoïa, a French company. It has won several
        awards, including the Mensa Select award and the 2004 Teacher's Choice
        Award. In 2009, the game was sold to Mattel.
        </p>
        
        <p>
            On our site you will find Directions on how to play Othello, 
            the game makers' contact information, the game, and the
            all time high scores.
        </p>
        <hr />
        <h2>
            Othello Duo/Travel Othello
        </h2>
        <p>
    Othello Duo is for two players only, and uses a smaller (14×14) board; the piece
    colors are purple and orange. The two starting squares are placed, not in the
    corner (as in the original Othello game) but nearer to the centre.  This makes a
    crucial difference in the flavour of the game, because players' pieces may (and
    usually do) touch after the first move. Even more than with the original game,
    Othello Duo is an offence-centred game; it is also a much purer strategy game
    than the four-player game, since one is not in danger of getting ganged up on by
    three other players (as sometimes happens with the four-player version).
        </p>
    
        <hr />
        <h2>
            Video games
        </h2>
        <p>
        Funkitron developed a PC casual game version of Othello called Othello World Tour.
        Released in December 2007, Othello World Tour was similar to the board
        game version of Othello while adding 16 playable characters, music and
        sound effects, and multiple game modes including a tour mode, quick
        play, and Othello Challenges. For some time, there was an official
        online version of Othello where visitors could play with opponents all
        over the world. Mattel suspended the online game on May 18, 2012,
        stating it did not meet its playability standards. It is now possible
        to play blokus online at Pentolla.com. The PlayStation Portable has
        Othello Portable: Steambot Championship, which features characters from
        Steambot Chronicles playing the Classic, Travel, and Duo versions of the
        game.  A Gameloft developed version of Othello was released for iPhone,
        iPod touch, and iPad in April 2010, featuring the Classic and Duo
        versions of the game, local and online multiplayer gameplay, and single
        player tournament mode. A clone named Quadrus, is available since
        January 2014. As of January 2014, the Gameloft version of Othello is
        no longer available from the App Store. Currently, the officially
        licensed Othello app is developed by Magmic, and is available for iPhone,
        iPod touch, and iPad. This version includes solo play and multiplayer
        options, integrating the user's Facebook and Game Center friends and
        allowing them to compete on a tournament leader-board.  There is also
        some open source software based on the same concept of polyominoes as
        blokus does, for example Blokish, Blockem, Freebloks or
        Pentobi for desktop and Freebloks or Blokish for Android
        smartphones.
        
        </p>
        <hr />
        <p>
            We are thankful to the following people and organizations 
            for helping us make this game a reality.
        </p>
        
        <p>
        <ul>
            <li>Kyle G Burke(KGB)</li>
            <li>DJ Skrien</li>
            <li>Othello.co Inc.</li>
           
        </ul>
        </p>
    
        <hr />
        
        </div>
        
            
        <footer>
        <p>
            <a href="http://validator.w3.org/check?uri=referer"><img
      src="http://www.citricity.com/images/valid-html5.png"></a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
                <img style="border:0;width:88px;height:31px"
                src="http://jigsaw.w3.org/css-validator/images/vcss"
                alt="Valid CSS!" />
            </a>
        </p>
        
        
        <hr />
        
        <blockquote>
            &quot;Some people think literature is high culture and that 
            it should only have a small readership. I don't think so... 
            I have to compete with popular culture, including TV, magazines, 
            movies and video games&quot; - Murakami 
        </blockquote>
        </footer>
        </div>
        
    </body>        
</html>
