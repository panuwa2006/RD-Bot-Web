<?php 
    
    $connection = mysqli_connect('localhost', 'root', '', 'safestory');
    if(mysqli_connect_errno()){
        die('Connection failed!' . mysqli_connect_error());
    }else{
        echo '<script>console.log("Connected...")</script>';
        //echo "Connected.";
    }

?>