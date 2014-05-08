<?php 
	$database = new PDO("mysql:dbname=test;host=localhost", "tetan", "cdeufmhsw");
	$rows = $database->query("select * from comments");
	foreach ($rows as $row) {
		?>
		<li> <?php echo($row["Message"] . ", " . date("Y-m-d h:i:s",$row["Time"])); ?> </li>
		<?php 
	}
?>