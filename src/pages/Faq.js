import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    category: "General",
    questions: [
      {
        id: 1,
        question: "What is YOUR BUDDY platform?",
        answer: "YOUR BUDDY is India's most advanced platform for students to share and access previous year papers, notes, and study resources from any college or university. Our mission is to democratize access to quality study materials across India."
      },
      {
        id: 2,
        question: "Is YOUR BUDDY free to use?",
        answer: "Yes, YOUR BUDDY is completely free to use. All resources, features, and community access is provided at no cost to students."
      },
      {
        id: 3,
        question: "Which colleges and universities are supported?",
        answer: "We support resources from over 500 colleges and universities across India including IITs, NITs, BITS, Delhi University, and many more. If your institution isn't listed, you can still upload resources and we'll add it to our database."
      }
    ]
  },
  {
    category: "Uploading Resources",
    questions: [
      {
        id: 4,
        question: "How do I upload my notes or previous year papers?",
        answer: "To upload resources, navigate to the Upload section from the navigation menu. Fill in the required details about your document (subject, year, college, etc.), select your file, and submit it for review. Once approved by our team, it will be available to all users."
      },
      {
        id: 5,
        question: "What file formats are supported for uploads?",
        answer: "We support PDF, DOC, DOCX, PPT, PPTX, JPG, JPEG, and PNG file formats. We recommend PDF format for the best viewing experience across devices."
      },
      {
        id: 6,
        question: "How long does it take for my uploaded resource to be approved?",
        answer: "Most resources are reviewed within 24-48 hours. The review process ensures that the content is appropriate, correctly categorized, and of good quality for our users."
      }
    ]
  },
  {
    category: "Downloading and Using Resources",
    questions: [
      {
        id: 7,
        question: "How can I find resources for my specific course or college?",
        answer: "Use the Browse section and filter by college/university, course, subject, and document type. You can also use the search feature to find specific resources."
      },
      {
        id: 8,
        question: "Is there a limit to how many resources I can download?",
        answer: "No, there are no limits on downloads. However, we encourage users to contribute by uploading their own resources as well."
      },
      {
        id: 9,
        question: "Can I access resources offline?",
        answer: "Once you download a resource, it's available on your device for offline access. We don't currently offer a dedicated offline mode for browsing."
      }
    ]
  },
  {
    category: "Community Features",
    questions: [
      {
        id: 10,
        question: "How do I join the community discussions?",
        answer: "Navigate to the Community section from the main menu. You can browse existing discussions, create new topics, or ask questions in relevant categories."
      },
      {
        id: 11,
        question: "How can I report inappropriate content or bugs?",
        answer: "You can report inappropriate content using the Report button available on each resource or discussion. For bugs, use the Report Bug section in the feedback area or contact our support team."
      },
      {
        id: 12,
        question: "Can I create a private study group?",
        answer: "Yes, you can create private study groups and invite specific members. In these groups, you can share resources, create discussions, and collaborate on topics relevant to your study needs."
      }
    ]
  },
  {
    category: "Account Management",
    questions: [
      {
        id: 13,
        question: "How do I create an account?",
        answer: "Click on the Register button in the navigation menu, fill in your details, and submit. You'll receive a verification email to activate your account."
      },
      {
        id: 14,
        question: "Can I change my email or username?",
        answer: "You can change your username from your profile settings. Email changes require verification and can be initiated from the account settings section."
      },
      {
        id: 15,
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your registered email address."
      }
    ]
  }
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  
  const toggleQuestion = (id) => {
    if (expandedQuestions.includes(id)) {
      setExpandedQuestions(expandedQuestions.filter(qId => qId !== id));
    } else {
      setExpandedQuestions([...expandedQuestions, id]);
    }
  };
  
  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about YOUR BUDDY platform</p>
      </div>
      
      <div className="faq-container">
        <div className="faq-sidebar">
          <h3>Categories</h3>
          <ul className="faq-categories">
            {faqData.map(category => (
              <li 
                key={category.category}
                className={activeCategory === category.category ? "active" : ""}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </li>
            ))}
          </ul>
          
          <div className="faq-contact">
            <h3>Still have questions?</h3>
            <p>Contact our support team for further assistance</p>
            <button className="contact-button">Contact Support</button>
          </div>
        </div>
        
        <div className="faq-content">
          {faqData.map(category => (
            category.category === activeCategory && (
              <div key={category.category} className="faq-category-content">
                <h2>{category.category}</h2>
                
                <div className="faq-questions">
                  {category.questions.map(item => (
                    <div key={item.id} className="faq-question-item">
                      <div 
                        className={`faq-question ${expandedQuestions.includes(item.id) ? 'expanded' : ''}`}
                        onClick={() => toggleQuestion(item.id)}
                      >
                        <h3>{item.question}</h3>
                        <span className="faq-toggle">
                          {expandedQuestions.includes(item.id) ? '−' : '+'}
                        </span>
                      </div>
                      
                      {expandedQuestions.includes(item.id) && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}