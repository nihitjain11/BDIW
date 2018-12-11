$(function(){
  var participant = [
  	{ value: 'Abhinav Bhardwaj | abhinav.bhardwaj_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Bhardwaj.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Bhardwaj.jpg">Download</a>'},
		{ value: 'Abhinav Chaudhary | abhinav1634.chaudhary@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Chaudhary.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Chaudhary.jpg">Download</a>'},
		{ value: 'Abhinay Sharma | abhinay.sharma_bca18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinay+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinay+Sharma.jpg">Download</a>'},
		{ value: 'Abhishek Jain | jianabhishek8085@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Jain.jpg">Download</a>'},
		{ value: 'Abhishek Jaiswal | abhishek.jaiswal_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Jaiswal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Jaiswal.jpg">Download</a>'},
		{ value: 'Abhishek Pratap Singh | Abhishekpratapsingh559@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Pratap+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishek+Pratap+Singh.jpg">Download</a>'},
		{ value: 'Abhishendra Gupta | abhishendra.gupta_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishendra+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhishendra+Gupta.jpg">Download</a>'},
		{ value: 'Akash Kumar Sharma | akash.sharma_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akash+Kumar+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akash+Kumar+Sharma.jpg">Download</a>'},
		{ value: 'Akash Paliwal | akash.paliwal_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akash+Paliwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akash+Paliwal.jpg">Download</a>'},
		{ value: 'Akhand Pratap Singh | akhand.singh_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akhand+Pratap+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akhand+Pratap+Singh.jpg">Download</a>'},
		{ value: 'Akshat Sinha | akshat.sinha_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akshat+Sinha.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akshat+Sinha.jpg">Download</a>'},
		{ value: 'Akshay Kumar | akshay.kumar_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akshay+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Akshay+Kumar.jpg">Download</a>'},
		{ value: 'Aman Garg | aman.garg99532@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Garg.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Garg.jpg">Download</a>'},
		{ value: 'Aman Kulshreshtha | aman.kulshreshtha_mba18@gla.c.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Kulshreshtha.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Kulshreshtha.jpg">Download</a>'},
		{ value: 'Aman Kushuaha | amankushaka57@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Kushuaha.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aman+Kushuaha.jpg">Download</a>'},
		{ value: 'Ambika Agarwal | ambikagarwal240@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ambika+Agarwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ambika+Agarwal.jpg">Download</a>'},
		{ value: 'Amit Kumar | amitkumaramitain15797@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Amit+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Amit+Kumar.jpg">Download</a>'},
		{ value: 'Ananya Agarawal | Ananyaagarawal80@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ananya+Agarawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ananya+Agarawal.jpg">Download</a>'},
		{ value: 'Ananya Singh | ananya.singh_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ananya+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ananya+Singh.jpg">Download</a>'},
		{ value: 'Anirudh Chaturvedi | chaturvedianirudh98@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anirudh+Chaturvedi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anirudh+Chaturvedi.jpg">Download</a>'},
		{ value: 'Ankita Maurya | ankita.maurya_ccv17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankita+Maurya.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankita+Maurya.jpg">Download</a>'},
		{ value: 'Ankur Agrawal | "ankuragrawal614@gmail.com,"', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankur+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankur+Agrawal.jpg">Download</a>'},
		{ value: 'Annoo Rai | annu1235rai@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Annu+Rai.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Annu+Rai.jpg">Download</a>'},
		{ value: 'Anshul Yadav | asnhulyadav0999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anshul+Yadav.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anshul+Yadav.jpg">Download</a>'},
		{ value: 'Antu Sharma | Antu787@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Antu+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Antu+Sharma.jpg">Download</a>'},
		{ value: 'Anubhav Bhardwaj | anubhav.bhardwaj_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anubhav+Bhardwaj.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anubhav+Bhardwaj.jpg">Download</a>'},
		{ value: 'Anuj Kumar Gupta | anuj.gupta_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anuj+Kumar+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Anuj+Kumar+Gupta.jpg">Download</a>'},
		{ value: 'Arpita Jain | arpita.jain_bba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arpita+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arpita+Jain.jpg">Download</a>'},
		{ value: 'Arpita Srivastava | arpitusrivastava09@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arpitu+Srivastava.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arpitu+Srivastava.jpg">Download</a>'},
		{ value: 'Arun Kumar Singh | arun.singh_bca17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arun+Kumar+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Arun+Kumar+Singh.jpg">Download</a>'},
		{ value: 'Ashay Kumar | ashaymaheshwari72@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashay+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashay+Kumar.jpg">Download</a>'},
		{ value: 'Ashay maheshwari | ashaymaheshawari1999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashay+maheshwari.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashay+maheshwari.jpg">Download</a>'},
		{ value: 'Ashwin Kumar Singh | samsinghsingh666674@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashwin+Kumar+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ashwin+Kumar+Singh.jpg">Download</a>'},
		{ value: 'Atul Kumar Yadav | atul.yadav_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Atul+Kumar+Yadav.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Atul+Kumar+Yadav.jpg">Download</a>'},
		{ value: 'Atul Singh | atul.singh_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Atul+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Atul+Singh.jpg">Download</a>'},
		{ value: 'Ayush Bansal | ayush.bansal_bba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayush+Bansal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayush+Bansal.jpg">Download</a>'},
		{ value: 'Ayush Chaturvedi | ayush.chaturvedi_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayush+Chaturvedi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayush+Chaturvedi.jpg">Download</a>'},
		{ value: 'Ayushi Agrawal | ayushi.agrawals2861@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayushi+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ayushi+Agrawal.jpg">Download</a>'},
		{ value: 'Bhakti Sharma | KiranBhakti25@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bhakti+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bhakti+Sharma.jpg">Download</a>'},
		{ value: 'Bharti Rajput | rajput.bharti075@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bharti+Rajput.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bharti+Rajput.jpg">Download</a>'},
		{ value: 'Bhumika Verma | bhumika.verma_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bhumika+Verma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Bhumika+Verma.jpg">Download</a>'},
		{ value: 'Chandresh Singh | chandresh.singh_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Chandresh+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Chandresh+Singh.jpg">Download</a>'},
		{ value: 'Deekesh Kumar Saxena | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deekesh+Kumar+Saxena.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deekesh+Kumar+Saxena.jpg">Download</a>'},
		{ value: 'Deekesh Kumar Sharma | deekesh.sharma_med18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deekesh+Kumar+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deekesh+Kumar+Sharma.jpg">Download</a>'},
		{ value: 'Deepak Chaudhary | deepak.chaudhary_ccv18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Chaudhary.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Chaudhary.jpg">Download</a>'},
		{ value: 'Deepak Gogia | Deepak.gogia_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Gogia.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Gogia.jpg">Download</a>'},
		{ value: 'Deepak Verma | deepak.verma_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Verma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepak+Verma.jpg">Download</a>'},
		{ value: 'Deepanshu | deepanshu.gla_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepanshu.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deepanshu.jpg">Download</a>'},
		{ value: 'Deependra Singh | deependrabhaduria12@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deependra+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Deependra+Singh.jpg">Download</a>'},
		{ value: 'Dheerendra Pratap Singh | Dheerendrapratapsingh1796@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Dheerendra+Pratap+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Dheerendra+Pratap+Singh.jpg">Download</a>'},
		{ value: 'Diksha Verma | dikshav410@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Diksha+Verma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Diksha+Verma.jpg">Download</a>'},
		{ value: 'Dipankar Dey | dipankar.dey_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Dipankar+Dey.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Dipankar+Dey.jpg">Download</a>'},
		{ value: 'Disha Sharma | disha.sharma_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Disha+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Disha+Sharma.jpg">Download</a>'},
		{ value: 'Divyani Singh | ds9277604@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Divyani+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Divyani+Singh.jpg">Download</a>'},
		{ value: 'Gagan Tyagi | gagan.tyagi_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gagan+Tyagi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gagan+Tyagi.jpg">Download</a>'},
		{ value: 'Gaurang Agarwal | gaurang.agarwal_ccv18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gaurang+Agarwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gaurang+Agarwal.jpg">Download</a>'},
		{ value: 'Gazal Arora | gazal.arora21@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gazal+Arora.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gazal+Arora.jpg">Download</a>'},
		{ value: 'Govind Singh | gssiKarwas9999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Govind+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Govind+Singh.jpg">Download</a>'},
		{ value: 'Gunjan Sharma | GunnuSharma337@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gunjan+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Gunjan+Sharma.jpg">Download</a>'},
		{ value: 'Hahid | nanunanuktgr@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hahid.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hahid.jpg">Download</a>'},
		{ value: 'Harsh Mishra | harsh.mishra_bca18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Mishra.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Mishra.jpg">Download</a>'},
		{ value: 'Harsh Sharma | harsh.sharma_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Sharma.jpg">Download</a>'},
		{ value: 'Harshi Singh Raj | harshitraj.singh6@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshi+Singh+Raj.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshi+Singh+Raj.jpg">Download</a>'},
		{ value: 'Harshit Ahuja | harshit.ahuja_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshit+Ahuja.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshit+Ahuja.jpg">Download</a>'},
		{ value: 'Harshit Jain | Harshit.jain_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshit+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshit+Jain.jpg">Download</a>'},
		{ value: 'Harshita Jaisal | harshitajaiswal7692@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshita+Jaisal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshita+Jaisal.jpg">Download</a>'},
		{ value: 'Harshita Mishra | harshimishra@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshita+Mishra.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harshita+Mishra.jpg">Download</a>'},
		{ value: 'Himanshu Gupta | himanshu.gupta_bca18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Himanshu+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Himanshu+Gupta.jpg">Download</a>'},
		{ value: 'Hritwaj Singh | Hritwaj.singh_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hritwaj+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hritwaj+Singh.jpg">Download</a>'},
		{ value: 'Hsritesh Dubey | hariteshdubey31@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hsritesh+Dubey.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Hsritesh+Dubey.jpg">Download</a>'},
		{ value: 'Jagjeet Singh | jagjeet.singh_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jagjeet+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jagjeet+Singh.jpg">Download</a>'},
		{ value: 'Jai Narayan Jain | jai.jain_ec18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jai+Narayan+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jai+Narayan+Jain.jpg">Download</a>'},
		{ value: 'Jalanki Nayak | jalankinayak10@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jalanki+Nayak.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jalanki+Nayak.jpg">Download</a>'},
		{ value: 'Jhanvi Sharma | jschhaya305@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jhanvi+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Jhanvi+Sharma.jpg">Download</a>'},
		{ value: 'Kapil Singh Raghav | kapil.raghav_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kapil+Singh+Raghav.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kapil+Singh+Raghav.jpg">Download</a>'},
		{ value: 'Khusboo Agrawal | khushboo.agrawal_cs17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Khusboo+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Khusboo+Agrawal.jpg">Download</a>'},
		{ value: 'Kirti Verma | kirti.verma_bca18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kirti+Verma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kirti+Verma.jpg">Download</a>'},
		{ value: 'Komal Agarwal | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komal+Agarwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komal+Agarwal.jpg">Download</a>'},
		{ value: 'Komal Chhangani | Komalchhangani22@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komal+Chhangani.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komal+Chhangani.jpg">Download</a>'},
		{ value: 'Komla Raewat | rawatkomal29@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komla+Raewat.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Komla+Raewat.jpg">Download</a>'},
		{ value: 'Krishna Kant Sharma | kksharma.ks17@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Krishan+Kant.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Krishan+Kant.jpg">Download</a>'},
		{ value: 'Krishna Kumar Gupta | ky7999857@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Krishna+Kumar+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Krishna+Kumar+Gupta.jpg">Download</a>'},
		{ value: 'Kshitij Khandelwal | "kkhandelwal140@gmail.com,"', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kshitij+Khandelwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Kshitij+Khandelwal.jpg">Download</a>'},
		{ value: 'Manoj Kumar | MK03chaudhary@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Manoj+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Manoj+Kumar.jpg">Download</a>'},
		{ value: 'Mohita Agrawal | mohita.agrawal_bcom18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Mohita+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Mohita+Agrawal.jpg">Download</a>'},
		{ value: 'Mridul Sharma | Mriduls126@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Mridul+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Mridul+Sharma.jpg">Download</a>'},
		{ value: 'Muskan Rajpal | muskan.rajpal_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Muskan+Rajpal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Muskan+Rajpal.jpg">Download</a>'},
		{ value: 'Nandini Mittal | nandinimittal132@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nandini+Mittal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nandini+Mittal.jpg">Download</a>'},
		{ value: 'Narendra Singh | narendra.singh_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Narendra+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Narendra+Singh.jpg">Download</a>'},
		{ value: 'Nidhi Jain | nidhi.jain252000@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nidhi+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nidhi+Jain.jpg">Download</a>'},
		{ value: 'Nidhi Tripathi | tripathinidhi471@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nidhi+Tripathi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nidhi+Tripathi.jpg">Download</a>'},
		{ value: 'Nikhil Jain | Nikhil.jain_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nikhil+Jain.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nikhil+Jain.jpg">Download</a>'},
		{ value: 'Nikunj Mani Gupta | nikunj.gupta_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nikunj+Mnai+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nikunj+Mnai+Gupta.jpg">Download</a>'},
		{ value: 'Nilay Kant Tripathi | Nilay.tripathi_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nilay+Kant+Tripathi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nilay+Kant+Tripathi.jpg">Download</a>'},
		{ value: 'Nisha Sundrani | nishasundrani1995@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nisha+Sundrani.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nisha+Sundrani.jpg">Download</a>'},
		{ value: 'Nmana Bansal | bansal1007naman@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nmana+Bansal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Nmana+Bansal.jpg">Download</a>'},
		{ value: 'Parul Sharma | Bbharadwajparul12@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Parul+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Parul+Sharma.jpg">Download</a>'},
		{ value: 'Pranav Aditya Shukla | pranav.shukla_ccv18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Pranav+Aditya+Shukla.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Pranav+Aditya+Shukla.jpg">Download</a>'},
		{ value: 'Pranshu Mishra | pranshu.mishra_cs18@gla.c.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Pranshu+Mishra.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Pranshu+Mishra.jpg">Download</a>'},
		{ value: 'Prashant Dixit | Prashant.dixit_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Prashant+Dixit.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Prashant+Dixit.jpg">Download</a>'},
		{ value: 'Prateek Swarnakar | Nickspras6121@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Prateek+Swarnakar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Prateek+Swarnakar.jpg">Download</a>'},
		{ value: 'Priya Banga | priya.banga_ccv17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Priya+Banga.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Priya+Banga.jpg">Download</a>'},
		{ value: 'Priyanshi Bansal | PriyanshiBansal8503@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Priyanshi+Bansal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Priyanshi+Bansal.jpg">Download</a>'},
		{ value: 'Rajat Sharma | rajat.sharma_bba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rajat+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rajat+Sharma.jpg">Download</a>'},
		{ value: 'Rishabh Bangar | rishabh.bangar_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishabh+Bangar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishabh+Bangar.jpg">Download</a>'},
		{ value: 'Rishabh Gupta | rishabhg434@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishabh+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishabh+Gupta.jpg">Download</a>'},
		{ value: 'Rishi Singh | cs24rishi@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishi+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishi+Singh.jpg">Download</a>'},
		{ value: 'Ritika Singh | Singhritika228@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ritika+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ritika+Singh.jpg">Download</a>'},
		{ value: 'Rituraj Patel | Rityrajpatel36@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rituraj+Patel.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rituraj+Patel.jpg">Download</a>'},
		{ value: 'Rohit Agrawal | rohit.agrawal_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rohit+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rohit+Agrawal.jpg">Download</a>'},
		{ value: 'Rudra Pratap Singh | Srudrapratap35@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rudra+Pratap+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rudra+Pratap+Singh.jpg">Download</a>'},
		{ value: 'Rupeth Singh | RupethSinghraingir@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rupeth+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rupeth+Singh.jpg">Download</a>'},
		{ value: 'Sakshi Sharma | sakshi.sharma_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sakshi+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sakshi+Sharma.jpg">Download</a>'},
		{ value: 'Sakshi Singh | b.sakshisingh@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sakshi+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sakshi+Singh.jpg">Download</a>'},
		{ value: 'Samridhi Sharma | ssamridhi511@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Samridhi+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Samridhi+Sharma.jpg">Download</a>'},
		{ value: 'Sanjana Singh | sanjana.singh_ec18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sanjana+Singh.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sanjana+Singh.jpg">Download</a>'},
		{ value: 'Darshan Kumar | 123darshann@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sarshan+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sarshan+Kumar.jpg">Download</a>'},
		{ value: 'Shalini Kumari | Madanmohansharma011@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shalini+Kumari.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shalini+Kumari.jpg">Download</a>'},
		{ value: 'Shashank Gupta | shashankgupta215@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shashank+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shashank+Gupta.jpg">Download</a>'},
		{ value: 'Shivangi Bhardwaj | shivajibharadwajB012@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivaji+Bhadawaj.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivaji+Bhadawaj.jpg">Download</a>'},
		{ value: 'Shivam Bansal | shivam.bansal_iot18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivam+Bansal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivam+Bansal.jpg">Download</a>'},
		{ value: 'Shivankanksha Mishra | Mishrashiv404@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivankanksha+Mishra.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shivankanksha+Mishra.jpg">Download</a>'},
		{ value: 'Shreya Agrawal | shreya1998.Sa@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shreya+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shreya+Agrawal.jpg">Download</a>'},
		{ value: 'Shruti Agrawal | shruti.agrawal_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shruti+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shruti+Agrawal.jpg">Download</a>'},
		{ value: 'Shubham Pathak | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shubham+Pathak.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shubham+Pathak.jpg">Download</a>'},
		{ value: 'Shekhar Rai | indiamale007@rediffmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shubhar+Rai.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Shubhar+Rai.jpg">Download</a>'},
		{ value: 'Siddhant Anand | siddhant123anand@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Siddhant+Anand.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Siddhant+Anand.jpg">Download</a>'},
		{ value: 'Simran Kaur | ksimran1509@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Simran+Kaur.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Simran+Kaur.jpg">Download</a>'},
		{ value: 'Sumangra Agbihotri | samaragnohotri@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sumangra+Agbihotri.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sumangra+Agbihotri.jpg">Download</a>'},
		{ value: 'Swapnil Sharma | swapnil.sharma_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Swapnil+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Swapnil+Sharma.jpg">Download</a>'},
		{ value: 'Sweccha Sharma | sweecha.sharma_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sweccha+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Sweccha+Sharma.jpg">Download</a>'},
		{ value: 'Tanya Tyagi | tanyatyagi9715@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tanya+Tyagi.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tanya+Tyagi.jpg">Download</a>'},
		{ value: 'Tripti Sharma | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tripti+Sharma.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tripti+Sharma.jpg">Download</a>'},
		{ value: 'Tushar Tiwari | tushar.tiwari092@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tushar+Tiwari.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Tushar+Tiwari.jpg">Download</a>'},
		{ value: 'Vandana Agarwal | Mailtovandanaagarwal97@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vandana+Agarwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vandana+Agarwal.jpg">Download</a>'},
		{ value: 'Varad Kumar | varad.kumar_mba17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Varad+Kumar.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Varad+Kumar.jpg">Download</a>'},
		{ value: 'Vibhuti Agrawal | vibhuti.agrawal_ccv17@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vibhuti+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vibhuti+Agrawal.jpg">Download</a>'},
		{ value: 'Vidhya Nidhi Shukla | vidhyanidhi98@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vidhya+Nidhi+Shukla.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vidhya+Nidhi+Shukla.jpg">Download</a>'},
		{ value: 'Vikas Yadav | myvikasyadav999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vikas+Yadav.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vikas+Yadav.jpg">Download</a>'},
		{ value: 'Vineet Agrawal | vineet.agrawal_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vineet+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vineet+Agrawal.jpg">Download</a>'},
		{ value: 'Vivek Goswami | panditv971@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vivek+Goswami.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vivek+Goswami.jpg">Download</a>'},
		{ value: 'Vivek Tiwari | vivek.tiwari_mba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vivek+Tiwari.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Vivek+Tiwari.jpg">Download</a>'},
		{ value: 'Yash Gupta | yash.gupta_bcom16@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Yash+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Yash+Gupta.jpg">Download</a>'},
		{ value: 'Yug Pratap | singhpratapyug@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Yug+Pratap.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Yug+Pratap.jpg">Download</a>'},
	  	{ value: 'Rishiraj Ojha | rishi0554@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishiraj+Ojha.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rishiraj+Ojha.jpg">Download</a>'},
	  	{ value: 'Abhilash Srivastava | abhilash.srivastava_mbals18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhilash+Srivastava.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhilash+Srivastava.jpg">Download</a>'},
	  	{ value: 'Abhay Maheshwari | abhaymah1999@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhay+Maheshwari.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhay+Maheshwari.jpg">Download</a>'},
	  	{ value: 'Harsh Mishra | harsh8765mishra@gmail.com', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Mishra1.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Harsh+Mishra1.jpg">Download</a>'},
		{ value: 'Ankita Agrawal | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankita+Agrawal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Ankita+Agrawal.jpg">Download</a>'},
		{ value: 'Rashmi Khandelwal | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rashmi+Khandelwal.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Rashmi+Khandelwal.jpg">Download</a>'},
		{ value: 'Chirag | NA', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Chirag.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Chirag.jpg">Download</a>'},
		{ value: 'Aryan Gupta | aryan.gupta_bba18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aryan+Gupta.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Aryan+Gupta.jpg">Download</a>'}
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name (email):</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});