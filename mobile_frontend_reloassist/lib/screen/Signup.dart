import 'package:flutter/material.dart';
import 'package:reloassist/screen/Login.dart';

class SignUpPage extends StatelessWidget {
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
                "Sign Up",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.red, // 🔴 Red Theme
                ),
              ),

              const SizedBox(height: 15),

              // 🔹 Input Fields
              _buildTextField("Full Name", Icons.person),
              const SizedBox(height: 12),
              _buildTextField("Email", Icons.email),
              const SizedBox(height: 12),
              _buildTextField("Registration Number", Icons.badge),
              const SizedBox(height: 12),
              _buildTextField("Password", Icons.lock, isPassword: true),
              const SizedBox(height: 12),
              _buildTextField("Confirm Password", Icons.lock, isPassword: true),

              const SizedBox(height: 20),

              // 🔹 Signup Button
              _buildSignUpButton(context),

              const SizedBox(height: 15),

              // 🔹 Login Link
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text("Already have an account?"),
                  TextButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginPage()),
                      );
                    },
                    child: const Text(
                      "Login",
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

  // 🔹 Signup Button (Fixed Context Issue)
  Widget _buildSignUpButton(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: ElevatedButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => LoginPage()),
          );
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.red,
          padding: const EdgeInsets.symmetric(vertical: 14),
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        ),
        child: const Text("Sign Up",
            style: TextStyle(fontSize: 18, color: Colors.white)),
      ),
    );
  }
}
