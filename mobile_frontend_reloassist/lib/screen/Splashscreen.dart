import 'package:flutter/material.dart';
import 'package:reloassist/screen/Login.dart'; // Import LoginPage

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Navigate to Login Page after 3 seconds
    Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => LoginPage()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.red, // 🔴 Red Background
      body: Center(
        child: Container(
          height: 85,
          padding: EdgeInsets.all(10),
          decoration: BoxDecoration(
              color: Colors.white, borderRadius: BorderRadius.circular(40)),
          child: Image.network(
            "https://hscepnsxrecslvjofyjh.supabase.co/storage/v1/object/public/srmpyq_paper//L1go.png",
            height: 200, // Adjust size as needed
          ),
        ),
      ),
    );
  }
}
