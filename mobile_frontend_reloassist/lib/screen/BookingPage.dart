import 'package:flutter/material.dart';

class BookingDetailsPage extends StatelessWidget {
  final String name;
  final DateTime date;
  final int guests;
  final String roomType;

  BookingDetailsPage({
    required this.name,
    required this.date,
    required this.guests,
    required this.roomType,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Booking Details'),
        backgroundColor: Colors.redAccent,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Booking Summary',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            Divider(color: Colors.grey),

            SizedBox(height: 16),

            // Name
            Row(
              children: [
                Icon(Icons.person, color: Colors.redAccent),
                SizedBox(width: 10),
                Text(
                  'Name: $name',
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),

            SizedBox(height: 10),

            // Date
            Row(
              children: [
                Icon(Icons.calendar_today, color: Colors.redAccent),
                SizedBox(width: 10),
                Text(
                  'Date: ${date.toLocal()}'.split(' ')[0],
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),

            SizedBox(height: 10),

            // Guests
            Row(
              children: [
                Icon(Icons.group, color: Colors.redAccent),
                SizedBox(width: 10),
                Text(
                  'Guests: $guests',
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),

            SizedBox(height: 10),

            // Room Type
            Row(
              children: [
                Icon(Icons.hotel, color: Colors.redAccent),
                SizedBox(width: 10),
                Text(
                  'Room Type: $roomType',
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),

            SizedBox(height: 30),

            // Back Button
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.redAccent,
                ),
                child: Text('Back', style: TextStyle(color: Colors.white)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
