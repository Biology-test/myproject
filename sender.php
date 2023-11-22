<?php
    $to = "waretsaalina@gmail.com"
    $date = date ("d.m.Y");
    $time = date ("h:i");
    $from = $email;
    $subject = "Заявка с опроса"

    $msg="
    mail($to, $subject, $msg, "From: $from ")