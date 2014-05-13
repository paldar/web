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
                <p><a href = "http://www.amazon.com/Mattel-B3165-Othello/dp/B00004TQMQ/ref=sr_1_2?ie=UTF8&qid=1399747657&sr=8-2&keywords=othello+game">Buy The Game</a></p>
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
                    class="othello_img"> 
  
        <p> 
            Othello is a strategy game for the whole family, and we
            are proud to present our own virtual implementation of 
            this game.
        </p>
        <p>
        Othello (like the Moor from the Shakespeare play) is a strategy board game for two players,
		played on an 8×8 uncheckered board. There are sixty-four identical game pieces called disks 
		(often spelled "discs"), which are light on one side and dark on the other. Players take turns 
		placing disks on the board with their assigned color facing up. During a play, any disks of the 
		opponent's color that are in a straight line and bounded by the disk just placed and another
		disk of the current player's color are turned over to the current player's color. The object of 
		the game is to have the majority of disks turned to display your color when the last playable
		empty square is filled.
        </p>
        
        <p>
            On our site you will find Directions on how to play Othello, 
            the game makers' contact information, the game, and the
            all time high scores.
        </p>
        <hr />
        <h2>
            Origin
        </h2>
        <p>
			The modern version is based on the game Reversi that was invented 
			in 1883 by either of two English men (each claiming the other a fraud), 
			Lewis Waterman or John W. Mollett (or perhaps earlier by someone else entirely),
			and gained considerable popularity in England at the end of the nineteenth century.
			The game's first reliable mention is in the August twenty-first 1886 edition of 
			The Saturday Review. Later mention includes an 1895 article in The New York Times: 
			"Reversi is something like Go Bang, and is played with 64 pieces." In 1893, the 
			well-known German games publisher Ravensburger started producing the game as one
			of its first titles. Two 18th-century continental European books dealing with a game 
			that may or may not be Reversi are mentioned on page fourteen of the Spring 1989 Othello
			Quarterly, and there has been speculation, so far without documentation, 
			that the game has even more ancient origins. 
		</p>
		<p>
			The current most regularly used rule-set—the one used on the international tournament 
			stage—originated in Mito, Ibaraki, Japan in the 1970s.The Japanese game company Tsukuda 
			Original registered the game under the trademark name Othello. The name was selected as
			a reference to the Shakespearean play Othello, the Moor of Venice, referring 
			to the conflict between the Moor Othello and Iago, and more controversially, to the unfolding drama 
			between Othello, who is black, and Desdemona, who is white. The green color of the board is inspired 
			by the image of the general Othello, valiantly leading his battle in a green field. It can also be 
			likened to a jealousy competition (jealousy being the central theme in Shakespeare's play), since 
			players engulf the pieces of the opponent, thereby turning them to their possession.
        
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
            <li>Pressman Toy Corporation</li>
			<li>wikipedia (for information)</li>
           
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
