// GSAP animation
gsap.registerPlugin(ScrollTrigger);

// Define the circular path segments
const pathSegments = [
    "highlightPathLightbluePink",
    "highlightPathPinkPurple",
    "highlightPathPurpleRed",
    "highlightPathRedBlue",
    "highlightPathBlueGreen",
    "highlightPathGreenYellow"
];

// Function to highlight the path segment between two dots with smooth transition
function tracePath(pathId) {
    const path = document.getElementById(pathId);
    if (path) {
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            onStart: () => {
                path.style.stroke = "grey"; // Set stroke color
                path.style.strokeWidth = "4"; // Increase stroke width
            }
        });
    }
}

// Function to reset the path segment between two dots with smooth transition
function resetPath(pathId) {
    const path = document.getElementById(pathId);
    if (path) {
        gsap.to(path, {
            strokeDashoffset: parseFloat(path.getAttribute("stroke-dasharray")),
            duration: 1,
            ease: "power2.out",
            onStart: () => {
                path.style.stroke = "grey"; // Reset stroke color
                path.style.strokeWidth = "4"; // Reset stroke width
            }
        });
    }
}

// ScrollTrigger for each section
pathSegments.forEach((segment, index) => {
    ScrollTrigger.create({
        trigger: `#section${index + 1}`, // Add quotes around the selector
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => tracePath(segment),
        onLeaveBack: () => resetPath(segment) // Reset the path when scrolling back
    });
});

// Initial highlight for the first segment
// tracePath(pathSegments[0]);

// Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// Animate the text elements
gsap.utils.toArray('.leftdiv1 h1, .leftdiv1 h6, .secimg13 h1, .secimg13 p, .right img').forEach((element) => {
    gsap.fromTo(element, 
        { 
            opacity: 0, 
            y: -50 
        },
        { 
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});

// Animate the images
gsap.utils.toArray('.mobimg1 img, .mobimg2 img').forEach((element) => {
    gsap.fromTo(element, 
        { 
            opacity: 0, 
            y: 50 
        },
        { 
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});


gsap.registerPlugin(ScrollTrigger);

// Function to animate elements
function animateElements(section) {
    const elements = section.querySelectorAll('.animate-slide-up');

    elements.forEach(element => {
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                y: -50 
            },
            { 
                opacity: 1, 
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Pin each section and animate elements within it
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom top",
        onEnter: () => animateElements(section),
        onLeaveBack: () => animateElements(section)
    });
});


