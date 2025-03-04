import 'package:flutter/material.dart';

class ExclusiveOffersSection extends StatelessWidget {
  final List<Map<String, String>> offers = [
    {
      "title": "20% Off on Luxury Apartments",
      "subtitle": "Book now and save big!",
      "image":
          "https://imgs.search.brave.com/maJIfLRvucA1_Sz4tHPKYj7uGVf_u48YAAWF15ONBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXBhcnRtZW50dGhl/cmFweS5pbmZvL2lt/YWdlL3VwbG9hZC9m/X2F1dG8scV9hdXRv/OmVjbyx3XzczMC9h/dC9ob3VzZSUyMHRv/dXJzLzIwMjAtMDIv/QWxleGFuZHJhJTIw/R2F0ZXIvSU1HXzI4/NDE.jpeg"
    },
    {
      "title": "Flash Sale: Cozy Homes",
      "subtitle": "Limited time deal!",
      "image":
          "https://imgs.search.brave.com/maJIfLRvucA1_Sz4tHPKYj7uGVf_u48YAAWF15ONBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXBhcnRtZW50dGhl/cmFweS5pbmZvL2lt/YWdlL3VwbG9hZC9m/X2F1dG8scV9hdXRv/OmVjbyx3XzczMC9h/dC9ob3VzZSUyMHRv/dXJzLzIwMjAtMDIv/QWxleGFuZHJhJTIw/R2F0ZXIvSU1HXzI4/NDE.jpeg"
    },
    {
      "title": "Special Discount for Families",
      "subtitle": "Enjoy 15% off on 3BHK homes",
      "image":
          "https://imgs.search.brave.com/maJIfLRvucA1_Sz4tHPKYj7uGVf_u48YAAWF15ONBnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXBhcnRtZW50dGhl/cmFweS5pbmZvL2lt/YWdlL3VwbG9hZC9m/X2F1dG8scV9hdXRv/OmVjbyx3XzczMC9h/dC9ob3VzZSUyMHRv/dXJzLzIwMjAtMDIv/QWxleGFuZHJhJTIw/R2F0ZXIvSU1HXzI4/NDE.jpeg"
    },
  ];

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 210,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: offers.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              // Show an alert or navigate to offer details
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text("Selected: ${offers[index]['title']}")),
              );
            },
            child: Container(
              width: 250,
              margin: const EdgeInsets.only(right: 15),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                color: Colors.white.withOpacity(0.8), // Glassmorphism effect
                boxShadow: [
                  BoxShadow(
                      color: Colors.black12, blurRadius: 8, spreadRadius: 2),
                ],
              ),
              child: Stack(
                children: [
                  // 📸 Background Image with Blur Effect
                  ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Image.network(
                      offers[index]['image']!,
                      width: 250,
                      height: 210,
                      fit: BoxFit.cover,
                    ),
                  ),

                  // 🎨 Gradient Overlay
                  Container(
                    width: 250,
                    height: 210,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      gradient: LinearGradient(
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                        colors: [
                          Colors.black.withOpacity(0.7),
                          Colors.transparent
                        ],
                      ),
                    ),
                  ),

                  // ✨ Offer Details (Title + Subtitle)
                  Positioned(
                    bottom: 20,
                    left: 15,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          offers[index]['title']!,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 3),
                        Text(
                          offers[index]['subtitle']!,
                          style: const TextStyle(
                            color: Colors.white70,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
