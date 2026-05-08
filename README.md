# 🚗 MonAuto — SaaS d'estimation de véhicules

Plateforme professionnelle d'estimation de véhicules d'occasion avec rapport premium, paiement Stripe, authentification complète et panneau admin.

---

## 🛠️ Stack technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS (thème custom dark premium)
- **BDD** : PostgreSQL + Prisma ORM
- **Auth** : NextAuth v5 (credentials)
- **Paiements** : Stripe Checkout + Webhooks
- **Déploiement** : Vercel

---

## 🚀 Installation locale

### 1. Cloner et installer

```bash
git clone https://github.com/vous/monauto.git
cd monauto
npm install
```

### 2. Variables d'environnement

```bash
cp .env.example .env.local
```

Remplissez les valeurs dans `.env.local` :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/monauto"
NEXTAUTH_SECRET="votre-secret-aleatoire-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
NEXT_PUBLIC_APP_URL="http://localhost:3000"
PREMIUM_REPORT_PRICE=990
```

### 3. Base de données

```bash
# Créer les tables
npx prisma db push

# Injecter les données initiales (40+ véhicules + admin)
npm run db:seed
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Le site est accessible sur **http://localhost:3000**

---

## 👤 Comptes de test

| Rôle  | Email               | Mot de passe |
|-------|---------------------|--------------|
| Admin | admin@monauto.com   | Admin1234!   |
| User  | demo@monauto.com    | Demo1234!    |

---

## 💳 Test Stripe

Utilisez la carte de test Stripe : `4242 4242 4242 4242` (exp: 12/34, cvc: 123)

Pour recevoir les webhooks en local :

```bash
stripe listen --forward-to localhost:3000/api/payment/webhook
```

---

## 🌐 Déploiement Vercel

### 1. Pusher sur GitHub et connecter à Vercel

### 2. Configurer les variables d'env dans le dashboard Vercel

### 3. Configurer PostgreSQL (Neon, Supabase, ou Vercel Postgres)

```bash
# Générer le client Prisma (inclus dans le build)
npx prisma generate
```

### 4. Configurer le webhook Stripe en production

URL du webhook : `https://monauto.com/api/payment/webhook`
Événement : `checkout.session.completed`

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.tsx               # Landing page
│   ├── estimation/            # Formulaire + résultats
│   ├── dashboard/             # Espace utilisateur
│   ├── admin/                 # Panneau admin
│   ├── auth/                  # Login + Register
│   ├── premium/success/       # Page confirmation paiement
│   └── api/                   # Routes API
│       ├── auth/              # NextAuth + Register
│       ├── estimate/          # Algorithme d'estimation
│       └── payment/           # Stripe checkout + webhook
├── components/
│   ├── layout/                # Navbar + Footer
│   ├── auth/                  # Formulaires login/register
│   ├── estimation/            # Form + Result
│   ├── dashboard/             # Contenu dashboard
│   └── admin/                 # Panneau admin
├── lib/
│   ├── estimation-engine.ts   # Algorithme de calcul
│   ├── auth.ts                # NextAuth config
│   ├── prisma.ts              # Client Prisma
│   ├── stripe.ts              # Client Stripe
│   └── utils.ts               # Utilitaires
└── types/
    └── index.ts               # Types TypeScript
```

---

## 🧠 Algorithme d'estimation

L'algorithme utilise :
1. **Prix de base** par modèle (base de 40+ véhicules)
2. **Dépréciation cumulative** par année (18% an 1 → 5% après 10 ans)
3. **Multiplicateur kilométrage** (ratio km réels vs km moyens attendus)
4. **Ajustement carburant** (bonus hybride/élec, malus diesel)
5. **Ajustement marque** (premium vs entrée de gamme)
6. **Fourchette selon état** (excellent → mauvais)
7. **Score bonne affaire** (0–100) basé sur 8 critères

---

## 📊 Fonctionnalités

### Gratuit
- Estimation basse / moyenne / haute
- Score bonne affaire
- Estimation décote annuelle simple
- Coût annuel estimatif

### Premium (9,90€)
- Tout du gratuit
- Décote projetée sur 2 ans
- Coûts carburant + entretien détaillés
- Comparaison avec 3 annonces marché
- Conseils personnalisés achat/revente

### Admin
- Statistiques globales
- Gestion utilisateurs
- Historique estimations
- Suivi paiements Stripe

---

## 📄 Licence

MIT — MonAuto SAS 2024
