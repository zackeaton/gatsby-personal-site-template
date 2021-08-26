---
title: "Build & Deploy A WordPress Site"
tags: ["wordpress", "localhost"]
description: "Build and deploy your own site."
author: "Zack Eaton"
date: "2019-09-24"
---

I've read several different articles about building your first WordPress site. I wanted to write my own blog post to talk about my experience building and deploying a WordPress site, specifically using MacOS.

My first WordPress website was built circa 2012, and I wasn't the one to set up the hosting. I've used FTPs and have managed and edited numerous WP sites in the past. But I wanted to go through the process of deploying and hosting a WP site from start to finish. We are using WordPress.org and not WordPress.com.

The tools that I used for this project are WordPress.org, a text editor (VS Code), and XAMPP. Go ahead and start by downloading a copy of WordPress (current version 5.4.2) and download XAMPP.

Once you have WordPress downloaded, and you have installed XAMPP, let's go ahead and take the steps to set up our development environment.

Launch XAMPP from your Applications folder. On the General tab you should see a button that says "Start". Press start to begin.

We need to start our services in XAMPP. Move to the "Services" tab and press "Start All" to begin services.

Move to the "Network" tab and enable the localhost:8080 port.

Move to the "Volumes" Tab and mount "/opt/lampp". Now you are ready to view your environment.

Head back to the "General" tab and click "Go to Application" or launch your favorite browser and go to localhost:8080. From here you should see the welcome page from XAMPP.

Now the next step we are going to do is create our database in PHPMyAdmin. This step is so incredibly simple, and once we create our database we can move to the WP side of developing.

From the localhost:8080 page in your browser, go to the top right corner of the webpage and click on "phpMyAdmin". Where you should be redirected to "http://localhost:8080/phpmyadmin/".

Once you are in phpMyAdmin we need to create a simple database for WordPress to connect to. From the top menu bar, click on the "Databases" tab to begin creating our database.

For simplicity of this tutorial, let's name our new database "my_database", and make sure to set the type from "utf8mb4_general_ci" to "Collation".

Now that our database has been made, let's go configure our WordPress files to align with our database configurations.

We need to make a few quick changed to one of the files in our WordPress folder before we move it over to XAMPP.

Locate your WordPress folder from your Downloads and open it.

From here, locate the "wp-config-sample.php" file and open it in your text editor.

On line 23 you should see "define( 'DB_NAME', 'database_name_here' );", go ahead and replace "database_name-here" with "my_database" or whatever you named your database in phpMyAdmin.

Next, on line 26 change 'username_here' to 'root'.

Then, on line 29 change 'password_here' to ''.

We are now finished with our edits to the "wp-config-sample.php" file.

Go ahead and save the changes you made to this file, and rename this file to "wp-config.php". You do not want a "wp-config-sample.php" file anymore.

There is one last step we need to do before moving WordPress to XAMPP. We need to rename the folder from "wordpress" to the name for our site.

For the simplicity of this tutorial, we will rename our WordPress folder to "testwebsite".

Once you rename your WordPress folder you are ready to move your site over to XAMPP.

To find the directory, go to XAMPP and click on the "Volumes" tab.

Next to the /opt/lampp volume, click on "Explore". This should take you to a Finder window in your "LAMPP" drive. Alternatively, you can open Finder, go to "Locations" and open up the Location with your IP Address.

From the LAMPP drive, open the folder titled "htdocs".

Once you are in the "htdocs" folder, drag and drop, (or copy/paste) your "testwebsite" folder into the "htdocs" folder. Be sure not to accidentally drop it into a subfolder.

Begin configuring your WordPress site by opening your browser and going to "localhost:8080/mytestwebsite/wp-admin/".

From the WP-Admin page, you can configure your new WP site. Go ahead and give your new website a title, and create your own login credentials to access the website. Be sure to make your credentials strong, and store them somewhere safe.

Once you are done setting up your WordPress site you can finish the installation process.

Now you should have your very own WordPress site on your machine. From here you can continue to make changes to your website. In the future, make sure to start up your server again, otherwise, you might think your website is gone.

In the future, I hope to write about how to host your WordPress website on the internet using a host like BlueHost or HostGator.

Until then, enjoy your very own WordPress site on your local machine. You will not be able to share this website with anyone until you get your site hosted. But this is the foundation to building your own WordPress website.