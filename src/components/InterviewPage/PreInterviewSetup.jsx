import React, { useState } from 'react';
import './PreInterviewSetup.css';

const PreInterviewSetup = ({ onStartInterview }) => {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    company: '',
    skills: '',
    industry: '',
    focus: ''
  });

  const [isStarting, setIsStarting] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [errors, setErrors] = useState({});

  const experienceLevels = [
    { value: 'fresher', label: '0-1 years (Fresher/Entry Level)' },
    { value: 'junior', label: '1-3 years (Junior)' },
    { value: 'mid', label: '3-6 years (Mid-Level)' },
    { value: 'senior', label: '6-10 years (Senior)' },
    { value: 'lead', label: '10+ years (Lead/Principal)' }
  ];

  const focusAreas = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Mobile Development',
    'DevOps/Cloud',
    'Data Science/ML',
    'System Design',
    'Product Management',
    'UI/UX Design',
    'Quality Assurance'
  ];

  const industries = [
    'Technology/Software',
    'Finance/Banking',
    'Healthcare',
    'E-commerce',
    'Education',
    'Gaming',
    'Media/Entertainment',
    'Consulting',
    'Startup',
    'Government'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.role.trim()) {
      newErrors.role = 'Please specify the role you are interviewing for';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter the target company name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const startCountdown = () => {
    if (!validateForm()) {
      return;
    }

    setIsStarting(true);
    setCountdown(5);

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onStartInterview(formData);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (isStarting) {
    return (
      <div className="pre-interview-setup">
        <div className="countdown-container">
          <div className="countdown-circle">
            <div className="countdown-number">{countdown}</div>
            <svg className="countdown-progress" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                className="countdown-track"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                className="countdown-fill"
                style={{
                  animation: `countdown 1s linear infinite`,
                  strokeDasharray: `${314 * (countdown / 5)} 314`
                }}
              />
            </svg>
          </div>
          <h2>Get Ready!</h2>
          <p>Your interview will begin in {countdown} seconds...</p>
          <div className="preparation-tips">
            <div className="tip">✓ Check your camera and microphone</div>
            <div className="tip">✓ Ensure good lighting</div>
            <div className="tip">✓ Sit up straight and smile</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pre-interview-setup">
      <div className="setup-container">
        <div className="setup-header">
          <h1>Interview Setup</h1>
          <p>Please provide some details to personalize your interview experience</p>
        </div>

        <form className="setup-form">
          {/* Required Fields */}
          <div className="form-section">
            <h3>Essential Information</h3>
            
            <div className="form-group">
              <label htmlFor="role">
                Position/Role You're Applying For *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="e.g., Software Engineer, Product Manager, Data Scientist"
                className={errors.role ? 'error' : ''}
              />
              {errors.role && <span className="error-message">{errors.role}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={errors.experience ? 'error' : ''}
              >
                <option value="">Select your experience level</option>
                {experienceLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
              {errors.experience && <span className="error-message">{errors.experience}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">
                Target Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="e.g., Google, Microsoft, Apple, Netflix"
                className={errors.company ? 'error' : ''}
              />
              {errors.company && <span className="error-message">{errors.company}</span>}
            </div>
          </div>

          {/* Optional Fields */}
          <div className="form-section">
            <h3>Additional Context (Optional)</h3>
            
            <div className="form-group">
              <label htmlFor="focus">
                Primary Focus Area
              </label>
              <select
                id="focus"
                name="focus"
                value={formData.focus}
                onChange={handleInputChange}
              >
                <option value="">Select a focus area (optional)</option>
                {focusAreas.map(focus => (
                  <option key={focus} value={focus}>
                    {focus}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="industry">
                Industry Preference
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
              >
                <option value="">Select industry (optional)</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="skills">
                Key Skills/Technologies
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, Python, AWS, Machine Learning..."
                rows="3"
              />
              <small className="help-text">
                List your key technical skills to get more relevant questions
              </small>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={startCountdown}
              className="start-interview-btn"
              disabled={isStarting}
            >
              <span className="btn-icon">🚀</span>
              Start My Interview
            </button>
            
            <div className="form-note">
              <p>* Required fields</p>
              <p>Your interview will be tailored based on this information</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreInterviewSetup;