<?php 
	$database = new PDO("mysql:dbname=tetan;host=localhost", "tetan", "cdeufmhsw");
	$rows = $database->query("select * from comments");
	
	foreach ($rows as $row) { 
?>
		<li id ="<?php echo($row["Time"]);?>"> 
			<?php echo($row["Message"] . ", " . date("Y-m-d h:i:s",$row["Time"])); ?>
			<Button class = "commentAgain" onclick="genCommentBox(event, <?php echo($row["Time"]);?>)" >comment</Button>	
		
		
		<?php
		$database2 = new PDO("mysql:dbname=tetan;host=localhost", "tetan", "cdeufmhsw");
		$subComments = $database2->query("select * from subComments");
		foreach ($subComments as $sub){
			if($sub["ParentID"] == $row["ID"]){
		?>
				<ul id ="<?php echo($sub["Time"]);?>"> 
					<?php echo($sub["Message"] . ", " . date("Y-m-d h:i:s",$sub["Time"])); ?>	
				</ul>
		<?php 
			}
		?>
		</li>
		<?php
		}
	}
?>	


