"use client";
import React, { useState } from "react";
import Stepper, { Step } from "@/components/ui/stepper";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Calendar, CheckCircle } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
}

export function GetInTouchSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateFormData = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFinalSubmit = () => {
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Ready to bring your project to life? Let's discuss your ideas and create something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">
                                Let's Connect
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300">john@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                            <h4 className="font-semibold text-black dark:text-white mb-4">
                                What I Can Help With
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="text-sm text-gray-600 dark:text-gray-300">• Web Development</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">• Mobile Apps</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">• UI/UX Design</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">• E-commerce</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">• API Development</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">• Consulting</div>
                            </div>
                        </div>
                    </div>

                    {/* Stepper Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2">
                        {isSubmitted ? (
                            <div className="p-8 text-center">
                                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    I'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <Stepper
                                onFinalStepCompleted={handleFinalSubmit}
                                stepCircleContainerClassName="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                contentClassName="min-h-[250px]"
                            >
                                {/* Step 1: Basic Information */}
                                <Step>
                                    <div className="space-y-4">
                                        <div className="text-center mb-4">
                                            <User className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                Tell me about yourself
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                Let's start with the basics
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => updateFormData("name", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => updateFormData("email", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Company (Optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => updateFormData("company", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Step>

                                {/* Step 2: Project Details */}
                                <Step>
                                    <div className="space-y-4">
                                        <div className="text-center mb-4">
                                            <MessageSquare className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                Project Details
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                What kind of project do you have in mind?
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Project Type *
                                                </label>
                                                <select
                                                    value={formData.projectType}
                                                    onChange={(e) => updateFormData("projectType", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                >
                                                    <option value="">Select project type</option>
                                                    <option value="website">Website Development</option>
                                                    <option value="webapp">Web Application</option>
                                                    <option value="mobile">Mobile App</option>
                                                    <option value="ecommerce">E-commerce Store</option>
                                                    <option value="redesign">Website Redesign</option>
                                                    <option value="consulting">Consulting</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Budget Range
                                                </label>
                                                <select
                                                    value={formData.budget}
                                                    onChange={(e) => updateFormData("budget", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="5k-10k">$5,000 - $10,000</option>
                                                    <option value="10k-25k">$10,000 - $25,000</option>
                                                    <option value="25k-50k">$25,000 - $50,000</option>
                                                    <option value="50k+">$50,000+</option>
                                                    <option value="discuss">Let's discuss</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Timeline
                                                </label>
                                                <select
                                                    value={formData.timeline}
                                                    onChange={(e) => updateFormData("timeline", e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white"
                                                >
                                                    <option value="">Select timeline</option>
                                                    <option value="asap">ASAP</option>
                                                    <option value="1-2months">1-2 months</option>
                                                    <option value="3-6months">3-6 months</option>
                                                    <option value="6months+">6+ months</option>
                                                    <option value="flexible">Flexible</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </Step>

                                {/* Step 3: Message */}
                                <Step>
                                    <div className="space-y-4">
                                        <div className="text-center mb-4">
                                            <Send className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                                Tell me more
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                Share your vision and any specific requirements
                                            </p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Project Description *
                                            </label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => updateFormData("message", e.target.value)}
                                                rows={4}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
                                                placeholder="Tell me about your project goals, target audience, key features you need, or any specific requirements..."
                                            />
                                        </div>

                                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                                                What happens next?
                                            </h4>
                                            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                                                <li>• I'll review your project details</li>
                                                <li>• Schedule a discovery call within 24 hours</li>
                                                <li>• Provide a detailed proposal and timeline</li>
                                                <li>• Start bringing your vision to life</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Step>
                            </Stepper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}