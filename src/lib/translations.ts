export type Language = "pt" | "en" | "es";

export const translations = {
  pt: {
    // Header
    systemTitle: "Sistema de Gestão da Segurança da Informação",
    subtitle: "ISO/IEC 27001:2022 — Conforme e Ativo",
    
    // Tabs
    tabDocuments: "Documentos",
    tabMaturity: "Maturidade",
    tabPentest: "Pentest",
    tabLgpd: "LGPD",
    
    // Stats Cards
    implemented: "Implementado",
    implementedDesc: "Documentos aprovados e vigentes",
    inReview: "Em Revisão",
    inReviewDesc: "Aguardando atualização",
    planned: "Planejado",
    plannedDesc: "Previstos para elaboração",
    inProgress: "Em Andamento",
    
    // Policies Section
    policies: "Políticas (POL)",
    policiesSubtitle: "Diretrizes Estratégicas",
    
    // Norms Section
    norms: "Normas (NRM)",
    normsSubtitle: "Diretrizes Táticas e Técnicas",
    
    // Procedures Section
    procedures: "Procedimentos (PRO)",
    proceduresSubtitle: "Execução Operacional",
    
    // ISO Map Section
    isoMap: "Mapa de Correlação ISO 27001:2022",
    isoMapSubtitle: "Anexo A - Domínios e Controles",
    
    // Table Headers
    code: "Código",
    title: "Título",
    isoControl: "Controle ISO",
    responsibleArea: "Área Responsável",
    maturity: "Maturidade",
    review: "Revisão",
    area: "Área",
    domain: "Domínio",
    mainControls: "Controles Principais",
    relatedDocs: "Documentos Relacionados",
    
    // Maturity Overview
    maturityOverview: "Visão Geral de Maturidade",
    avgScore: "Score médio global",
    status: "Status",
    keyDocs: "Documentos-Chave",
    nextAction: "Próxima Ação",
    
    // Next Steps
    nextSteps: "Próximas Etapas Estratégicas",
    nextStepsSubtitle: "Roadmap de Implementação",
    generalIndicators: "Indicadores Gerais",
    generalIndicatorsSubtitle: "Métricas do SGSI",
    
    // Pentest
    pentestTitle: "Testes de Penetração (Pentest)",
    pentestDesc: "Avaliações especializadas de segurança que simulam ataques reais para identificar vulnerabilidades em sistemas, aplicações e infraestrutura, garantindo a proteção proativa dos ativos críticos da organização.",
    pentestInProgress: "Pentest em Progresso",
    pentestCompleted: "Pentests Concluídos",
    
    // LGPD
    lgpdTitle: "Lei Geral de Proteção de Dados (LGPD)",
    complianceStatus: "Status de Conformidade",
    dataMapped: "Dados Pessoais Mapeados",
    actions: "Ações",
    action: "Ação",
    responsible: "Responsável",
    complete: "Completo",
    
    // Data categories
    dataMapping: "Mapeamento de Dados",
    privacyPolicies: "Políticas de Privacidade",
    consent: "Consentimento",
    impactReports: "Relatórios de Impacto",
    registrationData: "Dados Cadastrais",
    financialData: "Dados Financeiros",
    accessLogs: "Logs de Acesso",
    images: "Imagens (CFTV)",
    active: "Ativo",
    annual: "Anual",
    biennial: "Bienal",
    quarterly: "Trimestral",
    semiannual: "Semestral",
    
    // Document Titles - Policies
    policyInfoSecurity: "Política de Segurança da Informação",
    policyCommittee: "Comitê de Segurança da Informação e Privacidade",
    policyBusinessContinuity: "Política de Continuidade de Negócios",
    policyDataRetention: "Política de Retenção de Dados",
    policyMalwareProtection: "Política de Proteção contra Códigos Maliciosos",
    policyPasswords: "Política de Senhas",
    policySecureTransfer: "Política de Transferência Segura de Informações",
    policyEndUserControl: "Política de Controle de Computação do Usuário Final",
    policyTestData: "Política de Uso de Dados em Ambientes de Teste",
    policySoftwareUse: "Política de Uso de Software",
    
    // Document Titles - Norms
    normAccessControl: "Controle de Acesso",
    normInfoClassification: "Classificação da Informação",
    normCompliance: "Conformidade",
    normThirdPartyConnections: "Interconexões com Terceiros",
    normCryptography: "Criptografia e Gestão de Chaves",
    normSecureDevelopment: "Desenvolvimento e Aquisição Segura",
    normEquipmentUse: "Uso de Equipamentos Computacionais",
    normContinuityManagement: "Gestão de Continuidade",
    normChangeManagement: "Gestão de Mudanças",
    normProblemManagement: "Gestão de Problemas",
    normRiskManagement: "Gestão de Riscos",
    normIncidentManagement: "Gestão de Incidentes",
    
    // Document Titles - Procedures
    procLogicalAccessControl: "Controle de Acesso Lógico",
    procExceptionalAccess: "Acessos Excepcionais",
    procPasswordManagement: "Gestão de Senhas",
    procBackupRequest: "Solicitação/Alteração de Backups",
    procBackupRetention: "Retenção de Backups",
    procCryptoKeyManagement: "Gestão de Chaves Criptográficas",
    procEmailProtection: "Proteção de E-mails",
    procIncidentResponse: "Resposta a Incidentes",
    procMalwareResponse: "Contenção e Resposta a Malware",
    procPatchManagement: "Gestão de Patches",
    procChangeExecution: "Execução de Mudanças",
    procIncidentIndicators: "Indicadores de Incidentes",
    
    // Areas
    areaInfoSecurity: "Segurança da Informação",
    areaSecurityInfra: "Segurança / Infraestrutura",
    areaLegalIS: "Jurídico / SI",
    areaSecuritySupport: "Segurança / Suporte",
    areaInfrastructure: "Infraestrutura",
    areaInfraSecurity: "Infra / Segurança",
    areaSecurity: "Segurança",
    areaSecurityInfraShort: "Segurança / Infra",
    areaDevelopment: "Desenvolvimento",
    areaDevelopmentIS: "Desenvolvimento / SI",
    areaInfra: "Infra",
    areaInfraSupport: "Infra / Suporte",
    areaSupportIS: "Suporte / SI",
    areaHRIS: "RH / SI",
    
    // LGPD Actions
    lgpdUpdatePrivacyPolicy: "Atualizar Política de Privacidade",
    lgpdReviewContracts: "Revisar Contratos com Terceiros",
    lgpdTraining: "Treinamento LGPD - Equipe",
    
    // Pentest Items
    pentestDomoFacial: "DomoFacial",
    pentestSystemAccelero: "Sistema Accelero",
    pentestSystemOzone: "Sistema Ozone",
    pentestGateway: "Gateway Iongrade",
    pentestFacialPlate: "Placa Facial",
    pentestDomocam: "Domocam",
    
    // Data Types
    dataTypeClient: "Cliente",
    dataTypeEmployee: "Funcionário",
    dataTypeClientEmployee: "Cliente/Funcionário",
    dataTypeUsers: "Usuários",
    dataTypeVisitors: "Visitantes",
    
    // Footer
    companyDesc: "Soluções em segurança da informação e conformidade ISO/IEC 27001.",
    contact: "Contato",
    usefulLinks: "Links Úteis",
    institutionalSite: "Site Institucional",
    ourServices: "Nossos Serviços",
    aboutUs: "Sobre Nós",
    policiesFooter: "Políticas",
    privacyPolicy: "Política de Privacidade",
    termsOfUse: "Termos de Uso",
    securityPolicy: "Política de Segurança",
    socialNetworks: "Redes Sociais",
    reviewPeriod: "Periodicidade média de revisão: 12 meses",
    reviewResponsible: "Responsável pela revisão: CGSIP / Segurança da Informação",
    lastReview: "Última revisão geral: Agosto – Outubro 2025",
    copyright: "Todos os direitos reservados.",
  },
  en: {
    // Header
    systemTitle: "Information Security Management System",
    subtitle: "ISO/IEC 27001:2022 — Compliant and Active",
    
    // Tabs
    tabDocuments: "Documents",
    tabMaturity: "Maturity",
    tabPentest: "Pentest",
    tabLgpd: "LGPD",
    
    // Stats Cards
    implemented: "Implemented",
    implementedDesc: "Approved and active documents",
    inReview: "In Review",
    inReviewDesc: "Awaiting update",
    planned: "Planned",
    plannedDesc: "Scheduled for development",
    inProgress: "In Progress",
    
    // Policies Section
    policies: "Policies (POL)",
    policiesSubtitle: "Strategic Guidelines",
    
    // Norms Section
    norms: "Standards (NRM)",
    normsSubtitle: "Tactical and Technical Guidelines",
    
    // Procedures Section
    procedures: "Procedures (PRO)",
    proceduresSubtitle: "Operational Execution",
    
    // ISO Map Section
    isoMap: "ISO 27001:2022 Correlation Map",
    isoMapSubtitle: "Annex A - Domains and Controls",
    
    // Table Headers
    code: "Code",
    title: "Title",
    isoControl: "ISO Control",
    responsibleArea: "Responsible Area",
    maturity: "Maturity",
    review: "Review",
    area: "Area",
    domain: "Domain",
    mainControls: "Main Controls",
    relatedDocs: "Related Documents",
    
    // Maturity Overview
    maturityOverview: "Maturity Overview",
    avgScore: "Global average score",
    status: "Status",
    keyDocs: "Key Documents",
    nextAction: "Next Action",
    
    // Next Steps
    nextSteps: "Strategic Next Steps",
    nextStepsSubtitle: "Implementation Roadmap",
    generalIndicators: "General Indicators",
    generalIndicatorsSubtitle: "ISMS Metrics",
    
    // Pentest
    pentestTitle: "Penetration Testing (Pentest)",
    pentestDesc: "Specialized security assessments that simulate real attacks to identify vulnerabilities in systems, applications and infrastructure, ensuring proactive protection of critical organizational assets.",
    pentestInProgress: "Pentest in Progress",
    pentestCompleted: "Completed Pentests",
    
    // LGPD
    lgpdTitle: "General Data Protection Law (LGPD)",
    complianceStatus: "Compliance Status",
    dataMapped: "Mapped Personal Data",
    actions: "Actions",
    action: "Action",
    responsible: "Responsible",
    complete: "Complete",
    
    // Data categories
    dataMapping: "Data Mapping",
    privacyPolicies: "Privacy Policies",
    consent: "Consent",
    impactReports: "Impact Reports",
    registrationData: "Registration Data",
    financialData: "Financial Data",
    accessLogs: "Access Logs",
    images: "Images (CCTV)",
    active: "Active",
    annual: "Annual",
    biennial: "Biennial",
    quarterly: "Quarterly",
    semiannual: "Semi-annual",
    
    // Document Titles - Policies
    policyInfoSecurity: "Information Security Policy",
    policyCommittee: "Information Security and Privacy Committee",
    policyBusinessContinuity: "Business Continuity Policy",
    policyDataRetention: "Data Retention Policy",
    policyMalwareProtection: "Malicious Code Protection Policy",
    policyPasswords: "Password Policy",
    policySecureTransfer: "Secure Information Transfer Policy",
    policyEndUserControl: "End User Computing Control Policy",
    policyTestData: "Test Environment Data Use Policy",
    policySoftwareUse: "Software Use Policy",
    
    // Document Titles - Norms
    normAccessControl: "Access Control",
    normInfoClassification: "Information Classification",
    normCompliance: "Compliance",
    normThirdPartyConnections: "Third Party Interconnections",
    normCryptography: "Cryptography and Key Management",
    normSecureDevelopment: "Secure Development and Acquisition",
    normEquipmentUse: "Computing Equipment Use",
    normContinuityManagement: "Continuity Management",
    normChangeManagement: "Change Management",
    normProblemManagement: "Problem Management",
    normRiskManagement: "Risk Management",
    normIncidentManagement: "Incident Management",
    
    // Document Titles - Procedures
    procLogicalAccessControl: "Logical Access Control",
    procExceptionalAccess: "Exceptional Access",
    procPasswordManagement: "Password Management",
    procBackupRequest: "Backup Request/Change",
    procBackupRetention: "Backup Retention",
    procCryptoKeyManagement: "Cryptographic Key Management",
    procEmailProtection: "Email Protection",
    procIncidentResponse: "Incident Response",
    procMalwareResponse: "Malware Containment and Response",
    procPatchManagement: "Patch Management",
    procChangeExecution: "Change Execution",
    procIncidentIndicators: "Incident Indicators",
    
    // Areas
    areaInfoSecurity: "Information Security",
    areaSecurityInfra: "Security / Infrastructure",
    areaLegalIS: "Legal / IS",
    areaSecuritySupport: "Security / Support",
    areaInfrastructure: "Infrastructure",
    areaInfraSecurity: "Infra / Security",
    areaSecurity: "Security",
    areaSecurityInfraShort: "Security / Infra",
    areaDevelopment: "Development",
    areaDevelopmentIS: "Development / IS",
    areaInfra: "Infra",
    areaInfraSupport: "Infra / Support",
    areaSupportIS: "Support / IS",
    areaHRIS: "HR / IS",
    
    // LGPD Actions
    lgpdUpdatePrivacyPolicy: "Update Privacy Policy",
    lgpdReviewContracts: "Review Third Party Contracts",
    lgpdTraining: "LGPD Training - Team",
    
    // Pentest Items
    pentestDomoFacial: "DomoFacial",
    pentestSystemAccelero: "Accelero System",
    pentestSystemOzone: "Ozone System",
    pentestGateway: "Iongrade Gateway",
    pentestFacialPlate: "Facial Plate",
    pentestDomocam: "Domocam",
    
    // Data Types
    dataTypeClient: "Client",
    dataTypeEmployee: "Employee",
    dataTypeClientEmployee: "Client/Employee",
    dataTypeUsers: "Users",
    dataTypeVisitors: "Visitors",
    
    // Footer
    companyDesc: "Information security and ISO/IEC 27001 compliance solutions.",
    contact: "Contact",
    usefulLinks: "Useful Links",
    institutionalSite: "Institutional Site",
    ourServices: "Our Services",
    aboutUs: "About Us",
    policiesFooter: "Policies",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    securityPolicy: "Security Policy",
    socialNetworks: "Social Networks",
    reviewPeriod: "Average review period: 12 months",
    reviewResponsible: "Review responsible: CGSIP / Information Security",
    lastReview: "Last general review: August – October 2025",
    copyright: "All rights reserved.",
  },
  es: {
    // Header
    systemTitle: "Sistema de Gestión de Seguridad de la Información",
    subtitle: "ISO/IEC 27001:2022 — Conforme y Activo",
    
    // Tabs
    tabDocuments: "Documentos",
    tabMaturity: "Madurez",
    tabPentest: "Pentest",
    tabLgpd: "LGPD",
    
    // Stats Cards
    implemented: "Implementado",
    implementedDesc: "Documentos aprobados y vigentes",
    inReview: "En Revisión",
    inReviewDesc: "Esperando actualización",
    planned: "Planificado",
    plannedDesc: "Previstos para elaboración",
    inProgress: "En Progreso",
    
    // Policies Section
    policies: "Políticas (POL)",
    policiesSubtitle: "Directrices Estratégicas",
    
    // Norms Section
    norms: "Normas (NRM)",
    normsSubtitle: "Directrices Tácticas y Técnicas",
    
    // Procedures Section
    procedures: "Procedimientos (PRO)",
    proceduresSubtitle: "Ejecución Operacional",
    
    // ISO Map Section
    isoMap: "Mapa de Correlación ISO 27001:2022",
    isoMapSubtitle: "Anexo A - Dominios y Controles",
    
    // Table Headers
    code: "Código",
    title: "Título",
    isoControl: "Control ISO",
    responsibleArea: "Área Responsable",
    maturity: "Madurez",
    review: "Revisión",
    area: "Área",
    domain: "Dominio",
    mainControls: "Controles Principales",
    relatedDocs: "Documentos Relacionados",
    
    // Maturity Overview
    maturityOverview: "Vista General de Madurez",
    avgScore: "Puntuación media global",
    status: "Estado",
    keyDocs: "Documentos Clave",
    nextAction: "Próxima Acción",
    
    // Next Steps
    nextSteps: "Próximas Etapas Estratégicas",
    nextStepsSubtitle: "Hoja de Ruta de Implementación",
    generalIndicators: "Indicadores Generales",
    generalIndicatorsSubtitle: "Métricas del SGSI",
    
    // Pentest
    pentestTitle: "Pruebas de Penetración (Pentest)",
    pentestDesc: "Evaluaciones especializadas de seguridad que simulan ataques reales para identificar vulnerabilidades en sistemas, aplicaciones e infraestructura, garantizando la protección proactiva de los activos críticos de la organización.",
    pentestInProgress: "Pentest en Progreso",
    pentestCompleted: "Pentests Completados",
    
    // LGPD
    lgpdTitle: "Ley General de Protección de Datos (LGPD)",
    complianceStatus: "Estado de Conformidad",
    dataMapped: "Datos Personales Mapeados",
    actions: "Acciones",
    action: "Acción",
    responsible: "Responsable",
    complete: "Completo",
    
    // Data categories
    dataMapping: "Mapeo de Datos",
    privacyPolicies: "Políticas de Privacidad",
    consent: "Consentimiento",
    impactReports: "Informes de Impacto",
    registrationData: "Datos de Registro",
    financialData: "Datos Financieros",
    accessLogs: "Registros de Acceso",
    images: "Imágenes (CCTV)",
    active: "Activo",
    annual: "Anual",
    biennial: "Bienal",
    quarterly: "Trimestral",
    semiannual: "Semestral",
    
    // Document Titles - Policies
    policyInfoSecurity: "Política de Seguridad de la Información",
    policyCommittee: "Comité de Seguridad de la Información y Privacidad",
    policyBusinessContinuity: "Política de Continuidad de Negocios",
    policyDataRetention: "Política de Retención de Datos",
    policyMalwareProtection: "Política de Protección contra Códigos Maliciosos",
    policyPasswords: "Política de Contraseñas",
    policySecureTransfer: "Política de Transferencia Segura de Información",
    policyEndUserControl: "Política de Control de Computación del Usuario Final",
    policyTestData: "Política de Uso de Datos en Ambientes de Prueba",
    policySoftwareUse: "Política de Uso de Software",
    
    // Document Titles - Norms
    normAccessControl: "Control de Acceso",
    normInfoClassification: "Clasificación de la Información",
    normCompliance: "Conformidad",
    normThirdPartyConnections: "Interconexiones con Terceros",
    normCryptography: "Criptografía y Gestión de Claves",
    normSecureDevelopment: "Desarrollo y Adquisición Segura",
    normEquipmentUse: "Uso de Equipos Computacionales",
    normContinuityManagement: "Gestión de Continuidad",
    normChangeManagement: "Gestión de Cambios",
    normProblemManagement: "Gestión de Problemas",
    normRiskManagement: "Gestión de Riesgos",
    normIncidentManagement: "Gestión de Incidentes",
    
    // Document Titles - Procedures
    procLogicalAccessControl: "Control de Acceso Lógico",
    procExceptionalAccess: "Accesos Excepcionales",
    procPasswordManagement: "Gestión de Contraseñas",
    procBackupRequest: "Solicitud/Cambio de Backups",
    procBackupRetention: "Retención de Backups",
    procCryptoKeyManagement: "Gestión de Claves Criptográficas",
    procEmailProtection: "Protección de Correos Electrónicos",
    procIncidentResponse: "Respuesta a Incidentes",
    procMalwareResponse: "Contención y Respuesta a Malware",
    procPatchManagement: "Gestión de Parches",
    procChangeExecution: "Ejecución de Cambios",
    procIncidentIndicators: "Indicadores de Incidentes",
    
    // Areas
    areaInfoSecurity: "Seguridad de la Información",
    areaSecurityInfra: "Seguridad / Infraestructura",
    areaLegalIS: "Legal / SI",
    areaSecuritySupport: "Seguridad / Soporte",
    areaInfrastructure: "Infraestructura",
    areaInfraSecurity: "Infra / Seguridad",
    areaSecurity: "Seguridad",
    areaSecurityInfraShort: "Seguridad / Infra",
    areaDevelopment: "Desarrollo",
    areaDevelopmentIS: "Desarrollo / SI",
    areaInfra: "Infra",
    areaInfraSupport: "Infra / Soporte",
    areaSupportIS: "Soporte / SI",
    areaHRIS: "RH / SI",
    
    // LGPD Actions
    lgpdUpdatePrivacyPolicy: "Actualizar Política de Privacidad",
    lgpdReviewContracts: "Revisar Contratos con Terceros",
    lgpdTraining: "Capacitación LGPD - Equipo",
    
    // Pentest Items
    pentestDomoFacial: "DomoFacial",
    pentestSystemAccelero: "Sistema Accelero",
    pentestSystemOzone: "Sistema Ozone",
    pentestGateway: "Gateway Iongrade",
    pentestFacialPlate: "Placa Facial",
    pentestDomocam: "Domocam",
    
    // Data Types
    dataTypeClient: "Cliente",
    dataTypeEmployee: "Empleado",
    dataTypeClientEmployee: "Cliente/Empleado",
    dataTypeUsers: "Usuarios",
    dataTypeVisitors: "Visitantes",
    
    // Footer
    companyDesc: "Soluciones en seguridad de la información y conformidad ISO/IEC 27001.",
    contact: "Contacto",
    usefulLinks: "Enlaces Útiles",
    institutionalSite: "Sitio Institucional",
    ourServices: "Nuestros Servicios",
    aboutUs: "Sobre Nosotros",
    policiesFooter: "Políticas",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    securityPolicy: "Política de Seguridad",
    socialNetworks: "Redes Sociales",
    reviewPeriod: "Periodicidad media de revisión: 12 meses",
    reviewResponsible: "Responsable de la revisión: CGSIP / Seguridad de la Información",
    lastReview: "Última revisión general: Agosto – Octubre 2025",
    copyright: "Todos los derechos reservados.",
  },
};