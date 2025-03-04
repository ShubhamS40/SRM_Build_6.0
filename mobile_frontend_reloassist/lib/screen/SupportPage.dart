import 'package:flutter/material.dart';

class SupportPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Support"),
        backgroundColor: Colors.redAccent,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Contact Support Section
            Text(
              "Contact Support",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            Divider(color: Colors.grey),

            SizedBox(height: 10),

            // Phone Support
            Row(
              children: [
                Icon(Icons.phone, color: Colors.redAccent),
                SizedBox(width: 10),
                Text("+91 98765 43210", style: TextStyle(fontSize: 16)),
              ],
            ),

            SizedBox(height: 10),

            // Email Support
            Row(
              children: [
                Icon(Icons.email, color: Colors.redAccent),
                SizedBox(width: 10),
                Text("support@reloassist.com", style: TextStyle(fontSize: 16)),
              ],
            ),

            SizedBox(height: 20),

            // FAQs Section
            Text(
              "Frequently Asked Questions",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            Divider(color: Colors.grey),

            Expanded(
              child: ListView(
                children: [
                  FAQTile(
                      question: "How can I modify my booking?",
                      answer: "Go to 'My Bookings' and select 'Edit'."),
                  FAQTile(
                      question: "What is the cancellation policy?",
                      answer:
                          "Cancellations made within 24 hours are refundable."),
                  FAQTile(
                      question: "How can I contact support?",
                      answer: "You can email us at support@reloassist.com."),
                ],
              ),
            ),

            SizedBox(height: 20),

            // Live Chat Button
            Center(
              child: ElevatedButton.icon(
                onPressed: () {
                  // Implement live chat or WhatsApp link
                },
                style:
                    ElevatedButton.styleFrom(backgroundColor: Colors.redAccent),
                icon: Icon(Icons.chat, color: Colors.white),
                label: Text("Live Chat", style: TextStyle(color: Colors.white)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// FAQ Tile Widget
class FAQTile extends StatelessWidget {
  final String question;
  final String answer;

  FAQTile({required this.question, required this.answer});

  @override
  Widget build(BuildContext context) {
    return ExpansionTile(
      title: Text(question, style: TextStyle(fontWeight: FontWeight.bold)),
      children: [
        Padding(
          padding: EdgeInsets.all(8.0),
          child: Text(answer),
        ),
      ],
    );
  }
}
