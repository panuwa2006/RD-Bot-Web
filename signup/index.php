<?php
//  The connection
    require('connection.php');  
    
$error_server = "
setTimeout(typeWriterError, 1000)
var i = 0;
var bitrobo_message1 = 'Error!;There was a problem.;Can\'t connect to XCodeJet server.;'
var speed = 50;
document.getElementsByClassName('bitrobo-message')[0].innerHTML = ''
function typeWriterError(statement) {
  document.getElementsByClassName('bitrobo-message')[0].style.color = 'red'
  statement = 'create-account-name'
  if(statement === 'create-account-name'){
    if (i < bitrobo_message1.length) {
      if(bitrobo_message1.charAt(i).match(/;/gi)){
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += '<br>'
      }else{
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += bitrobo_message1.charAt(i)
      }
      i++
      setTimeout(typeWriterError, speed)
    }
  }else{i = 0}
}";   
    
/*    $first_name = '';
    $last_name = '';
    $email = '';
    $phone = '';
    $birthday = null;
    $gender = '';
    $passwd = '';
    $password = '';
*/    
    // Variables of data
    $errors = array();

    if(isset($_POST["create"])){
        //echo "<script>alert('sub')</script>";
        //store data
        $first_name = mysqli_real_escape_string($connection, $_POST["first_name"]);
        $last_name = mysqli_real_escape_string($connection, $_POST["last_name"]);
        $email = mysqli_real_escape_string($connection, $_POST["email"]);
        $phone = mysqli_real_escape_string($connection, $_POST["phone"]);
        $birthday = $_POST["birthday"];
        $gender = $_POST["gender"];
        $username = mysqli_real_escape_string($connection, $_POST["username"]);
        $passwd = mysqli_real_escape_string($connection, $_POST["password"]);
        $password = sha1($passwd);
        
        //check errors
        if(empty($errors)){
            $username = mysqli_real_escape_string($connection, $_POST["username"]);
            $query = "SELECT * FROM accounts
                        WHERE username = '{$username}'
                        LIMIT 1";
            $avalability_xcodejet = mysqli_query($connection, $query);
            //check users
            if($avalability_xcodejet){
                //check user
                if(mysqli_num_rows($avalability_xcodejet) == 1){
                    echo "<script>alert('This username is Not Avalable')</script>";
                    echo "<script>
                    var letter = 0;
                    var speed = 60;
                    bitrobo_errmessage();
                    let BIT_MESSAGE = 'This username is already used!'
                    let BIT_STATE = true
                    function bitrobo_errmessage() {
                      document.getElementsByClassName('bitrobo-message')[1].style.color = 'red'
                      if (letter < BIT_MESSAGE.length) {
                          if(BIT_MESSAGE.charAt(letter).match(/;/gi)){
                            document.getElementsByClassName('bitrobo-message')[1].innerHTML += '<br>'
                          }else{
                            document.getElementsByClassName('bitrobo-message')[1].innerHTML += BIT_MESSAGE.charAt(letter)
                          }
                          letter++
                          setTimeout(bitrobo_errmessage, speed)
                      }else{letter = 0; BIT_STATE = true; 
                            document.getElementsByClassName('bitrobo-message')[1].style.color = 'black'
                            return
                          }
                    }</script>";
                }else{
                    echo "<script>alert('Avalable')</script>";
                    //username avalable
                    /*echo $first_name = mysqli_real_escape_string($connection, $_POST["first_name"]);
                    echo $last_name = mysqli_real_escape_string($connection, $_POST["last_name"]);
                    echo $email = mysqli_real_escape_string($connection, $_POST["email"]);
                    echo $phone = mysqli_real_escape_string($connection, $_POST["phone"]);
                    echo $birthday = $_POST["birthday"];
                    echo $gender = $_POST["gender"];
                    echo $username = mysqli_real_escape_string($connection, $_POST["username"]);
                    echo $passwd = mysqli_real_escape_string($connection, $_POST["password"]);
                    echo $password = sha1($passwd);
*/
                    echo "<script>alert('Welcome {$first_name} to Safe Story.')</script>";
                    $query = "INSERT INTO accounts (username, password, first_name, last_name, gender, email, phone, birthday) VALUES ('{$username}', '{$password}', '{$first_name}', '{$last_name}', '{$gender}', '{$email}', '{$phone}', '{$birthday}')";
                    //send
                    mysqli_query($connection, $query);
                }

            }else{
                echo "<script>alert('Error')</script>";
                $errors[0] = $error_server;
                echo "<script>{$errors[0]}</script>";
            }
        }else{
            //nothing
                echo "<script>alert('Nothing')</script>";
        }
        //done
    }

    //$query = "INSERT INTO accounts (username, password, first_name, last_name, about, gender, profile_photo, is_deleted) VALUES ('{$username}', '{$password}', '{$first_name}', '{$last_name}', '{$about}', '{$gender}', '{$profile_photo}', $is_deleted)";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="header-00.css">
    <link rel="stylesheet" href="footer-01.css">
    <link rel="stylesheet" href="login-01.css">
    <link rel="icon" href="./media/icon.png">
    <link rel="stylesheet" href="./on-scroll-fix.css">
    <link rel="stylesheet" type="text/css" href="background-00.css">
    <title>Safe Story | Create Account</title>
</head>
<body>
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>
    <div class="header">
        <img src="./media/header-image.png" alt="XCODEJET">
        <div align="right" style="width: 90%;">
            <button href="register.html">Home</button>
            <button href="http://xcodejet.epizy.com">Login</button>
        </div> 
    </div>
    <!--Kumuthu Prabhasha [xcodejet.epizy.com]-->
    <div class="body-xcodejet">
        <!--2-->
        <div class="box-1">
            <div class="box-body" onclick="typeWriter()">
                <div class="box-body-div">
                    <br>
                    <h1><b>Create </b> <a style="text-shadow: 00 1px 15px rgba(226, 255, 213, 0);"><b style="color: red;">M</b><b style="color: rgb(255, 217, 0);">edia</b><b style="color: aqua;"> Tunnel</b></a> <b>account</b>.</h1>
                    <br>
                    <div class="box-body-input">
                        <div class="box-bitrobo">
                            <div class="bitrobo-dp"><img src="./media/accont-tag-bot.png" alt=""></div>
                            <div class="bitrobo-message-box">
                                <div class="bitrobo-message"></div>
                            </div>
                        </div>
                        <div class="name-input-field-full">
                            <li id="fname-tag">First Name:</li>
                            <div class="name-input-field">
                                <input class="data-input" name="first_name" id="fname" type="text" placeholder="enter your first name">
                            </div>
                            <br><br>
                            <li id="lname-tag">Last Name:</li>
                            <div class="name-input-field">
                                <input class="data-input" name="last_name" id="lname" type="text" placeholder="enter your last name">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-body-footer">
                    <div class="box-body-footer-back">
                        <div class="box-body-footer-back-btn" onclick="update_page('home')"><i class='fa fa-arrow-left'></i>&nbsp;Already have an account</div>
                    </div>
                    <div class="box-body-footer-next">
                        <div class="box-body-footer-next-btn" onclick="on_submit_page('name')">Next&nbsp;<i class='fa fa-arrow-right'></i></div>
                    </div>
                </div>
            </div>
        </div>
        <!--3-->
        <div class="box-1">
            <div class="box-header">
                <a>Registation in progress...</a>
            </div>
            <div class="box-body">
                <div class="box-body-img">
                    <img src="./media/MediaTunnel-splash.png">
                </div>
                <br>
                <div class="box-body-div">
                    <h1><b>Welcome </b><b id="myName1">User</b><b> to</b> <b style="color: red;">M</b><b style="color: rgb(255, 217, 0);">edia</b><b style="color: aqua;"> Tunnel</b></h1>
                    <br>
                    <div class="box-body-input">
                        <li id="email-tag">Email Address:</li>
                        <div class="name-input-field">
                            <input class="data-input" id="email" type="email" placeholder="example@gmail.com">
                        </div>
                        <br><br>
                        <li id="phone-tag">Phone:</li>
                        <div class="name-input-field">
                            <input class="data-input" id="phone" type="text" placeholder="94 7* *** ****">
                        </div>
                        <br><br>
                        <li id="birthday-tag"> Birthday:</li>
                        <div class="name-input-field">
                            <input class="data-input" id="birthday" type="date">
                        </div>
                        <br><br>
                        <li id="gender-tag"> Gender:</li>
                            <div class="name-input-field">
                            <select name="gender" style="width: 100%" class="data-input" id="gender" style="border-left: 0px;">
                                <option>male</option>
                                <option>female</option>
                            </select>
                            </div>
                        <br>
                    </div>
                </div>
                <div class="box-body-footer">
                    <div class="box-body-footer-back">
                        <div class="box-body-footer-back-btn" onclick="update_page('name'), document.getElementsByClassName('bitrobo-message')[1].innerHTML = ''"><i class='fa fa-arrow-left'></i>&nbsp;Back</div>
                    </div>
                    <div class="box-body-footer-next">
                        <div class="box-body-footer-next-btn" onclick="on_submit_page('detail'), bitrobo_message('You must be create an username and pawwsord for your account.;You can\'t change username again,;But password can change later.;;You have to type this password when you login.', 1)">Next&nbsp;<i class='fa fa-arrow-right'></i></div>
                    </div>
                </div>
            </div>
        </div>
        <!--3-->
        <div class="box-1">
            <div class="box-header">
                <a>Registation in progress...</a>
            </div>
            <div class="box-body">
                <div class="box-body-img">
                    <img src="./media/MediaTunnel-splash.png">
                </div>
                <br>
                <div class="box-body-div">
                    <h1><b>Create </b> <a style="text-shadow: 00 1px 15px rgb(226, 255, 213);"><b style="color: red;">M</b><b style="color: rgb(255, 217, 0);">edia</b><b style="color: aqua;"> Tunnel</b></a> <b>account</b></h1>
                    <br><br>
                    <div class="box-body-input">
                        <div class="box-bitrobo">
                            <div class="bitrobo-dp"><img src="./media/accont-tag-bot.png" alt=""></div>
                            <div class="bitrobo-message-box">
                                <div class="bitrobo-message"></div>
                            </div>
                        </div>
                    </div>
                    <div class="box-body-input">
                        <li id="username-tag">Create Username:</li>
                        <div class="name-input-field">
                            <input class="data-input" oninput="username_checking()" style="text-transform: lowercase;" id="username" type="text" placeholder="without symbols, space">
                        </div>
                        <br><br>
                        <li id="password-tag">Create Password:</li>
                        <div class="name-input-field">
                            <input class="data-input" id="password" type="text" placeholder="more than 6 digts">
                        </div>
                        <br><br>
                        <br>
                    </div>
                </div>
                <div class="box-body-footer">
                    <div class="box-body-footer-back">
                        <div class="box-body-footer-back-btn" onclick="update_page('detail')"><i class='fa fa-arrow-left'></i>&nbsp;Back</div>
                    </div>
                    <div class="box-body-footer-next">
                        <div class="box-body-footer-next-btn" style="visibility: hidden;" onclick="on_submit_page('acount-unpw')">Next&nbsp;<i class='fa fa-arrow-right'></i></div>
                    </div>
                </div>
            </div>
        </div>
        <!--4-->
        <div class="box-1" style="display: none;">
            <div class="box-header">
                <a>Registation in progress...</a>
            </div>
            <div class="box-body">
                <div class="box-body-img">
                    <img src="./media/MediaTunnel-splash.png">
                </div>
                <br>
                <div class="box-body-div">
                    <h1><b>Create </b> <a style="text-shadow: 00 1px 15px rgb(226, 255, 213);"><b style="color: red;">M</b><b style="color: rgb(255, 217, 0);">edia</b><b style="color: aqua;"> Tunnel</b></a> <b>account</b></h1>
                    <br><br>
                    <div class="box-body-input">
                        <div class="box-bitrobo">
                            <div class="bitrobo-dp"><img src="./media/accont-tag-bot.png" alt=""></div>
                            <div class="bitrobo-message-box">
                                <div class="bitrobo-message">Read bellow details before create your new account.</div>
                            </div>
                        </div>
                    </div>
                    <div class="box-body-input" style="width: 90%;">
                        <li>Name: <b id="name-output-display"></b></li>
                        <li>Email: <b id="email-output-display"></b></li>
                        <li>Phone: <b id="phone-output-display"></b></li>
                        <li>Birthday: <b id="birthday-output-display"></b></li>
                        <li>Gender: <b id="gender-output-display"></b></li>
                        <li>Username: <b id="un-output-display"></b></li>
                        <li>Password: <b id="pw-output-display"></b></li>
                        <br>
                    </div>
                </div>
                <div class="box-body-footer">
                    <div class="box-body-footer-back">
                        <div class="box-body-footer-back-btn" onclick="update_page('acount-unpw')"><i class='fa fa-arrow-left'></i>&nbsp;Back</div>
                    </div>
                    <div class="box-body-footer-next">
                        <form id="acc-data" method="post">
                            <input style="display: none" type="text" id="data-first_name" name="first_name" value="F-Name">
                            <input style="display: none" type="text" id="data-last_name" name="last_name">
                            <input style="display: none" type="text" id="data-email" name="email">
                            <input style="display: none" type="text" id="data-phone" name="phone">
                            <input style="display: none" type="date" id="data-birthday" name="birthday">
                            <input style="display: none" type="text" id="data-gender" name="gender">
                            <input style="display: none" type="text" id="data-username" name="username">
                            <input style="display: none" type="text" id="data-password" name="password">
                            <input style="display: none" type="text" id="data-type" name="account_type" value="user">
                            <div class="box-body-footer-next">
                                <div onclick="submit_data(this)" class="box-body-footer-next-btn">Next&nbsp;<i class='fa fa-arrow-right'></i></div>
                                <button style="display: none" type="submit" name="create" class="box-body-footer-next-btn-create">Create&nbsp;<i class='fa fa-plus'></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <a hidden>
            <!--කාටවත් කියන්න එපා හලෝ මේක හංගපු එකක් හොඳේ...-->
            <form id="hidden-data">
                <input type="text" id="backup-data-full_name" name="first_name">
                <input type="text" id="backup-data-last_name" name="last_name">
                <input type="text" id="backup-data-email" name="email">
                <input type="text" id="backup-data-phone" name="phone">
                <input type="date" id="backup-data-birthday" name="birthday">
                <input type="text" id="backup-data-gender" name="gender">
                <input type="text" id="backup-data-username" name="username">
                <input type="text" id="backup-data-password" name="password">
                <input type="text" id="backup-data-type" name="account_type" value="user">
            </form>
        </a>
    </div>
    <div class="footer-copyright">
        <div><h3>Powered By : <a>XCodeJet</a></h3></div>
    </div>
<script src="signup-v08.js"></script>
<script src="bitrobo-typing-v6.js"></script>
<script src="header-scroll-fix.js"></script>
</body>
</html>