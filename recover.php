<?php
function exist() {
	$arr = array();
	$i = 0;
	while($i < 3):
	$arr[$i] = array(
		'arr' => 'nice ' . $i,
		'ray' => 'try ' . $i
	);
	$i++;
	endwhile;
	return $arr;
}

$get = exist();
echo $get[1]['arr'];

?>