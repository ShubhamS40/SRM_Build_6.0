import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:reloassist/component/Navbar.dart';
import 'package:reloassist/screen/Signup.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // 🔹 Top Image (Using Supabase URL)
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    "https://hscepnsxrecslvjofyjh.supabase.co/storage/v1/object/public/srmpyq_paper//L1go.png",
                    height: 150,
                  ),
                ),
              ),

              // 🔹 Title
              const Text(
                "Welcome Back!",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.red, // 🔴 Red Theme
                ),
              ),

              const SizedBox(height: 5),

              // 🔹 Subtitle
              const Text(
                "Login to continue to Previous Year Question Paper App",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey,
                ),
              ),

              const SizedBox(height: 20),

              // 🔹 Email Input Field
              _buildTextField("Email", Icons.email),

              const SizedBox(height: 15),

              // 🔹 Password Input Field
              _buildTextField("Password", Icons.lock, isPassword: true),

              const SizedBox(height: 20),

              // 🔹 Login Button
              _buildLoginButton(context),

              const SizedBox(height: 20),

              // 🔹 Social Login Icons
              _buildSocialLoginButtons(context),

              const SizedBox(height: 10),

              // 🔹 Sign Up Link
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text("Don't have an account?"),
                  TextButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => SignUpPage()),
                      );
                    },
                    child: const Text(
                      "Sign Up",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Colors.red, // 🔴 Red Theme
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  // 🔹 Input Field Widget
  Widget _buildTextField(String hint, IconData icon,
      {bool isPassword = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: TextField(
        obscureText: isPassword,
        decoration: InputDecoration(
          hintText: hint,
          prefixIcon: Icon(icon, color: Colors.red), // 🔴 Red Icons
          filled: true,
          fillColor: Colors.grey[200],
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(10),
            borderSide: BorderSide.none,
          ),
        ),
      ),
    );
  }

  // 🔹 Login Button (Fixed Context Issue)
  Widget _buildLoginButton(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: ElevatedButton(
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => Navbar()));
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.red, // 🔴 Red Button
          padding: const EdgeInsets.symmetric(vertical: 14),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
        ),
        child: const Text(
          "Login",
          style: TextStyle(fontSize: 18, color: Colors.white),
        ),
      ),
    );
  }

  // 🔹 Social Login Buttons (Fixed Context Issue)
  Widget _buildSocialLoginButtons(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        IconButton(
          icon: const FaIcon(FontAwesomeIcons.google,
              color: Colors.red), // 🔴 Google Icon
          onPressed: () {
            // TODO: Implement Google Login
          },
        ),
        const SizedBox(width: 20),
        IconButton(
          icon: const FaIcon(FontAwesomeIcons.github, color: Colors.black),
          onPressed: () {
            // TODO: Implement GitHub Login
          },
        ),
      ],
    );
  }
}
