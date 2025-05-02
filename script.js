document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate floating AI elements on hero section
    const floatingElements = document.querySelectorAll('.floating-ai');
    floatingElements.forEach((el, index) => {
        // Random delay for each element
        el.style.animationDelay = `${index * 0.5}s`;
        el.style.opacity = '1';
    });
    
    // Populate AI Shows
    const showsContainer = document.querySelector('.shows-container');
    const aiShows = [
        {
            title: "Westworld",
            description: "Westworld is a science fiction TV series (2016–2022) created by Jonathan Nolan and Lisa Joy.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            year: "2016-2022",
            type: "TV Series"
        },
        {
            title: "Ex Machina",
            description: "Ex Machina is a 2015 sci-fi thriller about a young programmer who is invited to test a lifelike AI named Ava.",
            image: "https://theworldofmovies.com/wp-content/uploads/2016/02/Ex-Machina.jpg",
            year: "2014",
            type: "Movie"
        },
        {
            title: "Black Mirror",
            description: "Black Mirror is a British anthology science fiction series created by Charlie Brooker.",
            image: "https://wallpapersok.com/images/high/black-mirror-characters-on-a-broken-glass-1y1akbuvzvhvdk4q.jpg",
            year: "2011-Present",
            type: "TV Series"
        },
        {
            title: "The Social Dilemma",
            description: "The Social Dilemma is a 2020 documentary-drama directed by Jeff Orlowski, exploring how social media platforms manipulate users through algorithms to maximize engagement and profit.",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            year: "2020",
            type: "Documentary"
        },
        {
            title: "Her",
            description: "Her is a 2013 sci-fi romantic drama directed by Spike Jonze, set in a near-future world where a lonely man named Theodore falls in love with Samantha.",
            image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            year: "2013",
            type: "Movie"
        },
        {
            title: "Next Gen",
            description: "Next Gen is a 2018 animated science fiction film directed by Kevin R. Adams and Joe Ksander.",
            image: "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-futuristic-vr-glasses-in-metaverse-a-3d-rendered-illustration-of-next-image_3638128.jpg",
            year: "2018",
            type: "Animated Movie"
        }
    ];
    
    aiShows.forEach(show => {
        const showCard = document.createElement('div');
        showCard.className = 'show-card';
        showCard.innerHTML = `
            <div class="show-img">
                <img src="${show.image}" alt="${show.title}">
            </div>
            <div class="show-content">
                <h3>${show.title}</h3>
                <p>${show.description}</p>
                <div class="show-meta">
                    <span>${show.year}</span>
                    <span>${show.type}</span>
                </div>
            </div>
        `;
        showsContainer.appendChild(showCard);
    });
    
    // Populate AI Chatbots
    const chatbotsContainer = document.querySelector('.chatbots-container');
    const aiChatbots = [
        {
            name: "ChatGPT",
            description: "Advanced conversational AI by OpenAI",
            icon: "fas fa-comment-dots",
            features: [
                "Natural language processing",
                "Contextual understanding",
                "Multi-turn conversations",
                "Knowledge up to 2023"
            ],
            link: "https://chat.openai.com"
        },
        {
            name: "gemini",
            description: "Google's AI chatbot with advanced capabilities",
            icon: "fab fa-google",
            features: [
                "Integrated with Google services",
                "Real-time information",
                "Image and video generation",
                "Multi-language support"
            ],
            link: "https://www.google.com/"
        },
        {
            name: "Claude",
            description: "AI assistant by Anthropic",
            icon: "fas fa-head-side-virus",
            features: [
                "Constitutional AI principles",
                "Helpful, harmless, and honest",
                "Long document analysis",
                "Ethical considerations"
            ],
            link: "https://www.anthropic.com"
        },
        {
            name: "deepseek",
            description: "AI chatbot with a focus on deep learning",
            icon: "fas fa-brain",
            features: [
                "Deep learning algorithms",
                "Image and video analysis",
                "Natural language understanding",
                "Real-time data processing"
            ],
            link: "https://deepseek.ai/"
        },
        {
            name: "Grok-3",
            description: "Real-time X (Twitter) info + edgy humor",
            icon: "fab fa-twitter",
            features: [
                "Multimodal Capabilities",
                "Large Context Window",
                "Code Understanding",
                "Fast & Lightweight"
            ],
            link: "https://grok.com/"
        },
        {
            name: "Perplexity",
            description: " Fast, cited, search-based answers",
            icon: "fas fa-search",
            features:[
                "Real-time data",
                "Threaded conversations",
                "Guided research",
                "Autocomplete suggestions"
            ],
            link: "https://www.perplexity.ai/"
        },
        {
            name: "ChatSonic",
            description: "AI chatbot with voice and image generation",
            icon: "fas fa-microphone-alt",
            features: [
                "Voice interaction",
                "Image generation",
                "Real-time data access",
                "Multi-language support"
            ],
            link: "https://writesonic.com/chat"
        },
        {
            name: "blackbox",
            description: "AI-powered code generation tool",
            icon: "fas fa-code",
            features: [
                "Code generation",
                "Code completion",
                "Multi-language support",
                "Integration with IDEs"
            ],
            link: "https://blackbox.ai/"
        }, 
        {
            name: "Copy.ai",
            description: "AI-powered copywriting tool",
            icon: "fas fa-copy",
            features: [
                "Content generation",
                "SEO optimization",
                "Plagiarism checker",
                "Team collaboration tools"
            ],
            link: "https://www.copy.ai/"
        },
        {
            name: "Replika",
            description: "AI companion that learns to communicate like you",
            icon: "fas fa-heart",
            features: [
                "Personalized conversations",
                "Mood tracking",
                "Role-playing games",
                "Voice interaction"
            ],
            link: "https://replika.ai/"
        },
        {
            name: "Microsoft Copilot Chat",
            description: "AI assistant for Microsoft Copilot",
            icon: "fab fa-microsoft",
            features: [
                "Integrated with Microsoft 365",
                "Real-time collaboration",
                "Task automation",
                "Multi-language support"
            ],
            link: "https://www.microsoft.com/en-us/microsoft-365/copilot"
        },
        {
            name: "Cleverbot",
            description: "AI chatbot that learns from conversations",
            icon: "fas fa-brain",
            features: [
                "Conversational learning",
                "Humor and wit",
                "Multi-language support",
                "API access for developers"
            ],
            link: "https://www.cleverbot.com/"
        }
    ];
    
    aiChatbots.forEach(chatbot => {
        const chatbotCard = document.createElement('div');
        chatbotCard.className = 'chatbot-card';
        chatbotCard.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-icon">
                    <i class="${chatbot.icon}"></i>
                </div>
                <div class="chatbot-info">
                    <h3>${chatbot.name}</h3>
                    <p>${chatbot.description}</p>
                </div>
            </div>
            <ul class="chatbot-features">
                ${chatbot.features.map(feature => `
                    <li><i class="fas fa-check-circle"></i> ${feature}</li>
                `).join('')}
            </ul>
            <a href="${chatbot.link}" target="_blank" class="btn">Visit ${chatbot.name}</a>
        `;
        chatbotsContainer.appendChild(chatbotCard);
    });
    
    // Create AI Network Connections
    const connectionsContainer = document.getElementById('connectionsCanvas');
    const nodeCount = 8;
    const nodes = [];
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'ai-node';
        
        // Random position within container
        const left = 10 + Math.random() * 80;
        const top = 10 + Math.random() * 80;
        
        node.style.left = `${left}%`;
        node.style.top = `${top}%`;
        
        // Random icon
        const icons = ['fa-brain', 'fa-microchip', 'fa-robot', 'fa-network-wired', 'fa-code', 'fa-cogs'];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        node.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        
        connectionsContainer.appendChild(node);
        nodes.push({ element: node, left, top });
        
        // Add hover effect
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.2)';
            node.style.boxShadow = '0 0 30px rgba(110, 72, 170, 0.8)';
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.boxShadow = '0 5px 15px rgba(110, 72, 170, 0.5)';
        });
    }
    
    // Create connections between nodes
    function createConnections() {
        // Clear existing connections
        document.querySelectorAll('.connection-line').forEach(el => el.remove());
        
        // Create new connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                // Only connect some nodes randomly
                if (Math.random() > 0.6) continue;
                
                const node1 = nodes[i];
                const node2 = nodes[j];
                
                const line = document.createElement('div');
                line.className = 'connection-line';
                
                // Calculate position and angle between nodes
                const x1 = node1.left;
                const y1 = node1.top;
                const x2 = node2.left;
                const y2 = node2.top;
                
                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                line.style.width = `${length}%`;
                line.style.left = `${x1}%`;
                line.style.top = `${y1}%`;
                line.style.transform = `rotate(${angle}deg)`;
                
                // Random opacity for visual variety
                line.style.opacity = 0.2 + Math.random() * 0.3;
                
                connectionsContainer.appendChild(line);
            }
        }
    }
    
    createConnections();
    
    // Animate connections periodically
    setInterval(() => {
        // Randomly change some node positions slightly
        nodes.forEach(node => {
            if (Math.random() > 0.7) {
                const newLeft = Math.max(5, Math.min(95, node.left + (Math.random() * 10 - 5)));
                const newTop = Math.max(5, Math.min(95, node.top + (Math.random() * 10 - 5)));
                
                node.element.style.left = `${newLeft}%`;
                node.element.style.top = `${newTop}%`;
                node.left = newLeft;
                node.top = newTop;
            }
        });
        
        createConnections();
    }, 3000);
    
    // Interactive Chatbot Demo
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    const botResponses = [
        "That's an interesting question about AI. Many shows explore this concept, like Westworld and Black Mirror.",
        "AI chatbots can vary in their capabilities. Some are general purpose like ChatGPT, while others are specialized for specific tasks.",
        "The connections between AI systems are becoming increasingly complex as they learn to communicate and share information.",
        "Ethical considerations are crucial when developing AI systems. Many shows highlight the potential dangers of unchecked AI development.",
        "Recent advancements in natural language processing have made chatbots much more conversational and helpful.",
        "Would you like me to recommend some AI shows based on your interests?",
        "The relationship between humans and AI is a common theme in many movies and TV shows. What aspect interests you most?",
        "Some AI chatbots are designed to be creative, helping with writing, art, and even music composition."
    ];
    
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse() {
        // Simple random response for demo purposes
        return botResponses[Math.floor(Math.random() * botResponses.length)];
    }
    
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            // Simulate typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'message bot-message';
            typingIndicator.id = 'typingIndicator';
            typingIndicator.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
            chatMessages.appendChild(typingIndicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate bot thinking time
            setTimeout(() => {
                document.getElementById('typingIndicator').remove();
                addMessage(getBotResponse(), false);
            }, 1000 + Math.random() * 2000);
        }
    });
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate sections when they come into view
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize section animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Initial animation trigger
    animateOnScroll();
});