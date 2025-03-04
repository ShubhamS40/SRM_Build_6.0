import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Profile"),
        backgroundColor: Colors.redAccent,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            // Profile Picture
            Center(
              child: CircleAvatar(
                radius: 50,
                backgroundImage: NetworkImage(
                    "https://via.placeholder.com/150"), // Replace with actual image
              ),
            ),
            SizedBox(height: 10),

            // User Name
            Text(
              "John Doe",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),

            SizedBox(height: 20),

            // Profile Details
            ProfileDetailRow(
                icon: Icons.email,
                label: "Email",
                value: "john.doe@example.com"),
            ProfileDetailRow(
                icon: Icons.phone, label: "Phone", value: "+91 98765 43210"),
            ProfileDetailRow(
                icon: Icons.home, label: "Address", value: "New Delhi, India"),

            SizedBox(height: 20),

            // Edit Profile Button
            ElevatedButton.icon(
              onPressed: () {
                // Navigate to edit profile page
              },
              icon: Icon(Icons.edit, color: Colors.white),
              label:
                  Text("Edit Profile", style: TextStyle(color: Colors.white)),
              style:
                  ElevatedButton.styleFrom(backgroundColor: Colors.redAccent),
            ),

            SizedBox(height: 20),

            // Logout Button
            TextButton.icon(
              onPressed: () {
                // Implement logout logic
              },
              icon: Icon(Icons.logout, color: Colors.redAccent),
              label: Text("Logout", style: TextStyle(color: Colors.redAccent)),
            ),
          ],
        ),
      ),
    );
  }
}

// Profile Detail Row Widget
class ProfileDetailRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;

  ProfileDetailRow(
      {required this.icon, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.redAccent),
          SizedBox(width: 10),
          Text("$label: ", style: TextStyle(fontWeight: FontWeight.bold)),
          Expanded(child: Text(value, overflow: TextOverflow.ellipsis)),
        ],
      ),
    );
  }
}
