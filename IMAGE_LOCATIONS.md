# Stock Image Locations - Complete Guide

## 📍 HOME PAGE (`src/app/page.tsx`)

### Hero Section Carousel (Lines 36-40)
**5 rotating background images** - Generic construction/engineering photos
- Line 36: `photo-1541888946425-d81bb19240f5` - Steel structure/bridge
- Line 37: `photo-1503387762-592deb58ef4e` - Construction workers/team
- Line 38: `photo-1590856029826-c7a73142bbf1` - Blueprint/planning
- Line 39: `photo-1487958449943-2429e8be8625` - Modern building exterior
- Line 40: `photo-1504307651254-35680f356dfd` - Construction site aerial

### About Section (Lines 221-411)
**Floating Image** (Line 221)
- `photo-1541888946425-d81bb19240f5` - Steel structure

**Core Values Grid - 3 Images** (Lines 396-411)
- Line 396: `photo-1503387762-592deb58ef4e` - Engineering team
- Line 404: `photo-1590856029826-c7a73142bbf1` - Structural analysis
- Line 411: `photo-1487958449943-2429e8be8625` - Construction site

### Services Section - 5 Service Cards (Lines 470-625)
**Card 1: Estimation & Take-Off** (Line 470)
- `photo-1454165804606-c3d57bc86b40` - Calculator/documents

**Card 2: Structural Steel Detailing** (Line 511)
- `photo-1581094271901-8022df4466f9` - Steel beams/structure

**Card 3: Connection Design** (Line 549)
- `photo-1513467535987-fd81bc7d62f8` - Steel connections

**Card 4: BIM Services** (Line 587)
- `photo-1503387762-592deb58ef4e` - BIM modeling/team

**Card 5: Rebar Detailing** (Line 625)
- `photo-1590856029826-c7a73142bbf1` - Rebar/reinforcement

### Featured Service Card Background (Line 661)
- `photo-1487958449943-2429e8be8625` - Construction background (opacity overlay)

### Technology Showcase Section - 3 Images (Lines 713-724)
**Image Collage**
- Line 713: `photo-1504307651254-35680f356dfd` - Engineering tech
- Line 719: `photo-1581094271901-8022df4466f9` - Construction tech
- Line 724: `photo-1541888946425-d81bb19240f5` - Modern structure

---

## 📍 ABOUT PAGE (`src/app/about/page.tsx`)

### Core Values Carousel - 5 Rotating Images (Lines 35-63)
**Value 1: Precision in Design**
- Line 35: `photo-1581094271901-8022df4466f9` - Precision engineering

**Value 2: Innovation in Practice**
- Line 42: `photo-1503387762-592deb58ef4e` - Innovation/technology

**Value 3: Client-Centric Approach**
- Line 49: `photo-1487958449943-2429e8be8625` - Client collaboration

**Value 4: Excellence in Execution**
- Line 56: `photo-1541888946425-d81bb19240f5` - Excellence/structure

**Value 5: Safety & Compliance**
- Line 63: `photo-1590856029826-c7a73142bbf1` - Safety/compliance

### Our Story Section - Image Grid (Lines 275-298)
**4 Images in 2x2 Grid**
- Line 275: `photo-1541888946425-d81bb19240f5` - Construction site (top-left)
- Line 282: `photo-1503387762-592deb58ef4e` - Engineering team (bottom-left)
- Line 291: `photo-1590856029826-c7a73142bbf1` - Blueprint planning (top-right)
- Line 298: `photo-1487958449943-2429e8be8625` - Modern structure (bottom-right)

### CTA Section Background (Line 690)
- `photo-1541888946425-d81bb19240f5` - Construction project background

---

## 📍 PROJECTS PAGE (`src/app/projects/page.tsx`)

### Hero Carousel (Lines 16-18)
**3 Rotating Background Images**
- Line 16: `photo-1541888946425-d81bb19240f5` - Steel structure
- Line 17: `photo-1486406146926-c627a92ad1ab` - Modern building
- Line 18: `photo-1590856029826-c7a73142bbf1` - Construction

### Project Cards - 8 Projects (Lines 36-99)
**Each project has its own image:**

**Project 1: Downtown Commercial Tower** (Line 36)
- `photo-1486406146926-c627a92ad1ab` - Commercial tower

**Project 2: Riverside Residential Complex** (Line 45)
- `photo-1545324418-cc1a3fa10c00` - Residential building

**Project 3: Historic Building Retrofit** (Line 54)
- `photo-1511818966892-d7d671e672a2` - Historic building

**Project 4: Industrial Manufacturing Facility** (Line 63)
- `photo-1565008576549-57569a49371d` - Industrial facility

**Project 5: University Science Building** (Line 72)
- `photo-1562774053-701939374585` - Educational building

**Project 6: Healthcare Center Expansion** (Line 81)
- `photo-1519494026892-80bbd2d6fd0d` - Healthcare facility

**Project 7: Transit Hub Renovation** (Line 90)
- `photo-1581094794329-c8112a89af12` - Infrastructure/transit

**Project 8: Waterfront Office Complex** (Line 99)
- `photo-1497366216548-37526070297c` - Waterfront office

---

## 📍 SERVICES PAGE (`src/app/services/page.tsx`)

### Hero Carousel (Lines 16-18)
**3 Rotating Background Images**
- Line 16: `photo-1487958449943-2429e8be8625` - Construction
- Line 17: `photo-1503387762-592deb58ef4e` - Engineering team
- Line 18: `photo-1541888946425-d81bb19240f5` - Steel structure

### Service Detail Cards (Line 161)
**Dynamic images based on service index** (uses template literal)
```javascript
index === 0 ? '1503387762-592deb58ef4e' :  // Service 1
index === 1 ? '1541888946425-d81bb19240f5' :  // Service 2
index === 2 ? '1590069261209-f8e9b8642343' :  // Service 3
index === 3 ? '1454165804606-c3d57bc86b40' :  // Service 4
'1581094794329-c8112a89af12'                  // Service 5
```

---

## 🎯 REPLACEMENT PRIORITY GUIDE

### ✅ HIGH PRIORITY - Replace These First (Most Visible)
1. **Homepage Hero Carousel** (5 images) - First thing visitors see
2. **Projects Page Hero Carousel** (3 images) - Projects landing
3. **Services Page Hero Carousel** (3 images) - Services landing
4. **Homepage Service Cards** (5 images) - Main service showcase

### ⚠️ MEDIUM PRIORITY - Replace When You Have Relevant Photos
1. **Project Cards** (8 images) - Replace with actual project photos
2. **About Page Story Grid** (4 images) - Company/team photos work best
3. **Homepage About Section** (4 images) - Company culture/projects

### ⏳ LOW PRIORITY - Can Keep or Replace Later
1. **Core Values Carousel** (5 images) - Abstract/conceptual, current ones work
2. **Technology Showcase** (3 small images) - Background collage, less critical
3. **Featured Service Card Background** (1 image) - Blurred overlay background
4. **CTA Section Backgrounds** (2 images) - Background only, less visible

---

## 💡 HOW TO REPLACE IMAGES

### Option 1: Replace with Your Own Photos
1. Place images in `/public` folder (e.g., `/public/project1.jpg`)
2. Update the URL in code: `src="/project1.jpg"`

### Option 2: Replace with Different Stock Photos
1. Find better Unsplash images at unsplash.com
2. Copy the photo ID from URL (e.g., `photo-XXXXXXXXXXXXX`)
3. Replace in code: `https://images.unsplash.com/photo-XXXXXXXXXXXXX?w=800`

### Example Replacement:
```javascript
// BEFORE:
image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"

// AFTER (Your own photo):
image: "/my-project-photo.jpg"

// OR (Different Unsplash):
image: "https://images.unsplash.com/photo-NEWPHOTO123?w=800"
```

---

## ✅ COMPLETED CHANGES
- ✅ Removed "ABOUT US" header badge from homepage (no longer displays above main heading)

---

## 📊 TOTAL COUNT
- **Homepage:** 19 stock images
- **About Page:** 10 stock images  
- **Projects Page:** 11 stock images (3 hero + 8 project cards)
- **Services Page:** 8 stock images (3 hero + 5 service cards)

**GRAND TOTAL: 48 stock image locations**

Replace according to priority and availability of actual project photos!
