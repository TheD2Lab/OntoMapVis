var taskDatasets = {
  conference: {
    domain: "conference",
    tasks: [
      {
        "qtype": "identifying", // correct mapping
        "question": "How many mappings are shown in the visualization in total?",
        "atype": "number",
        "answer": "10"
      },
      {
        "qtype": "identifying", // incorrect mapping - multiple inheritance
        "question": "How many classes is \"Author\" in the left ontology mapped to?",
        "atype": "number",
        "answer": "1"
      },
      {
        "qtype": "identifying", // incorrect mapping
        "question": "What is \"SlideSet\" in the left ontology mapped to in the right ontology?",
        "atype": "class",
        "answer": "Document"
      },
      {
        "qtype": "identifying", // correct mapping
        "question": "Is there a mapping between \"AcademicEvent\" (in the left ontology) and \"Scientific_Event\" (in the right ontology)?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "validation", // correct mapping
        "question": "Is \"AcademiaOrganization\" in the left ontology correctly mapped?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "identifying", // missing mapping
        "question": "Can \"Person\" in the left ontology be mapped to another class in the right ontology?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "creation", // missing mapping
        "question": "Which class could \"Attendee\" in the left ontology be mapped to in the right ontology?",
        "atype": "class",
        "answer": "Conference_Participant"
      },
      {
        "qtype": "identifying", // correct mapping
          "question": "What is \"ConferenceDinner\" in the left ontology mapped to in the right ontology?",
          "atype": "class",
          "answer": "Conference_Banquet"
        },
      {
        "qtype": "validation", // incorrect mapping
        "question": "\"SecurityTopic\" in the left ontology is mapped to \"Research_Topic\" in the right ontology. Is this a correct mapping?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "validation", // correct mapping
        "question": "\"Place\" in the left ontology is mapped to \"Location\" in the right ontology. Is this a correct mapping?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "identifying", // incorrect mapping
        "question": "Is the mapping from \"RejectedPaper\" in the left ontology to \"Assigned_Paper\" in the right ontology correct?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "validation", // incorrect mapping
        "question": "Is the mapping from \"IndustryOrganization\" in the left ontology to \"Organisation\" in the right ontology correct?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "creation", // missing mapping
        "question": " What class can \"AcceptedPaper\" in the left ontology be mapped to in the right ontology?",
        "atype": "class",
        "answer": "Accepted_Paper"
      },
      {
        "qtype": "identifying", // missing mapping
        "question": "Is there a mapping that should exist between \"Workshop\” in the left ontology to another class in the right ontology?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "creation", // missing mapping
        "question": "Are there any other mappings that should be created between the ontologies but are currently absent from the visualization? List as many missing mappings as you can (ex. \"x\",\"y\")",
        "atype": "class",
        "answer": "" // multiple
      }
    ]
  },
  anatomy:  {
    domain: "anatomy",
    tasks: [
      {
        "qtype": "identifying", // correct mapping
        "question": "How many mappings are shown in the visualization in total?",
        "atype": "number",
        "answer": "10"
      },
      {
        "qtype": "identifying", // correct mapping
        "question": "How many classes is \"Skin\" in the left ontology mapped to?",
        "atype": "number",
        "answer": "1"
      },
      {
        "qtype": "identifying", // correct mapping
        "question": "What is \"Viscera\" in the left ontology mapped to in the right ontology?",
        "atype": "class",
        "answer": "visceral organ system"
      },
      {
        "qtype": "identifying", // missing mapping
        "question": "Is there a mapping between \"Blood\" (in the left ontology) and \"blood\" (in the right ontology)?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "validation", // incorrect mapping
        "question": "Is \"Cartilage\" in the left ontology correctly mapped?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "identifying", // missing mapping
        "question": "Can \"Joint\" in the left ontology be mapped to another class in the right ontology?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "creation", // missing mapping
        "question": "Which class could \"Heart\" in the left ontology be mapped to in the right ontology?",
        "atype": "class",
        "answer": "heart"
      },
      {
        "qtype": "identifying", // correct mapping
        "question": "What is \"Skull\" in the left ontology mapped to in the right ontology?",
        "atype": "class",
        "answer": "cranium"
      },
      {
        "qtype": "validation", // incorrect mapping
        "question": "\"Urinary_System_Part\" in the left ontology is mapped to \"muscle\" in the right ontology. Is this a correct mapping?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "validation", // incorrect mapping
        "question": "\"Cheek\" in the left ontology is mapped to \"cuticle\" in the right ontology. Is this a correct mapping?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "identifying", // correct mapping
        "question": "Is the mapping from \"Skin\" in the left ontology to \"skin\" in the right ontology correct?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "validation", // incorrect mapping
        "question": "Is the mapping from \"Mucus\" in the left ontology to \"nasal mucus\" in the right ontology correct?",
        "atype": "y/n",
        "answer": "No"
      },
      {
        "qtype": "creation", // missing mapping
        "question": " What class can \"Lip\" in the left ontology be mapped to in the right ontology?",
        "atype": "class",
        "answer": "Lip"
      },
      {
        "qtype": "identifying", // missing mapping
        "question": "Is there a mapping that should exist between \”Arm\” in the left ontology to another class in the right ontology?",
        "atype": "y/n",
        "answer": "Yes"
      },
      {
        "qtype": "creation", // missing mapping
        "question": "Are there any other mappings that should be created between the ontologies but are currently absent from the visualization? List as many missing mappings as you can (ex. \"x\",\"y\")",
        "atype": "class",
        "answer": "" // multiple
      }
    ]
  }
};