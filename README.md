
# Introduction
The Mutawwir blog, dedicated to coding, linux, dev tools, CLI tools, TUI, softwares, programming languages, frameworks, build tools, web development, IDEs and much more

# Vision

A blog that goes straight to practical. No here and there perhaps we should name it straight to code or straight way to  code (in arabic ofc) and add it in description
so there would be no introduction, just say what your gonna do in the start of each blog and start doing it
but there would be buttons and markers here and there, which would contain the "here and there" blog information like background (why I got here, why am I doig thi, frustrations of people e.t.cc). Maybe this will keep the SEO good too
This blog should lead to my portfolio, so the about us page, will lead to another website which will be my portfolio


# Today TODO

- [] fix the black fade in effect having it's own seperate area

Now start writing paragraphs, and improve seo (do keyword research, better alts, better file names, better headings, more data-titles, better article dividers (sections footers e.t.c fix that, and use it properly with good seo))


# TODO
- [] [SEO](#SEO)
- [] [Footer](#Footer)
- [] [Related Blogs](#Related Blogs) (do this one after you have written some blogs)
- [] [Blogs Reimagined](#Blogs Reimagined)
- [] [Testing](#Testing)
- [] [Highlight Stroke](#Highlight Strke)
- [] [Article Steps](#Article Steps)
- [] [Showcase section](#Showcase section) 
- [x] [Table of Content](#Table of Content)
- [x] [Article Sidebar](#Article Sidebar)
- [x] [Blogs](#BLogs)
- [x] [New Logo](#New Logo)
- [x] [In-page Navbar](#In-page Navbar)
- [x] [Hero background](#Background)
- [x] [image-text arc](#Arc)
- [x] [Seemless seperators section](#Seemless lines) 

# Related Blogs
A section below individual blogs, that shows blogs that a person may wanna read after it, perhaps you could somehow, fill in this information using AI LLMA 3 (if the blog website becomes massive).

# Footer
Add a footer to your website, take inspirations, leanr it's purpose, and see how you can make the best footer for SEO

# Blogs Reimagined

Instead of an opprach top to bottom sections, with left to right blogs, instead introduce a grid layout, with each section having it's on grid-cell

Change topics to simple buttons instead of big areas as big as blogs, take some inspiration from other sites, to get a better grid layout

Make the headings overflow of the sections like this

--title-----
|          |
|          |
------------

# Highlight Stroke

A way to highlight a certain phrase or word using a literal brush stroke underneath it. or behind it as background

# Table of Content

A button on the bottom right, which on being clicked shoud expand into a box that will contain the table of content

# In-page Navbar
A navbar sticking to the bottom, with glassmorphic style, with links linking to headings of the hero page

## Improvements

switch from anchor tag to your custom gradient link tag (will require to pass down all props from gradient link to anchor tag)
highlight current gradient link, the person is on, perhaps with the same cool effect, or just accent color

# Article Sidebar

A sidebar that opens once a user clicks a button within the article or just plain text, for example perhaps you want to put reasons for why you went in a certain way iside that sidebar

# Article Steps

Find a better way to represent lists of tasks todo in order to achieve a certain goal in blogs, or in general find better ways to represent lists

# Blogs
What I am imaginging is a page, with boxes, with each one representing a blog post, then there are sections as described below

You will have to create a proper system that uses .md file to get information about blogs, than creates pages for each md file, and a box on the index page

create default background for blog with no background, and loading blog compoenent

when there is fewer blogs, then the black fade, does not get sticked to the right, solution is to probably use svelte to change it dynamically using javascript

## New blogs
holds all the news blogs, Idk if this is the right name for it

## Blogs by topic
so the plan for this is unique, we would have boxes, but they would be stacked over each other, and once someone clicks them, they would expand (perhaps absolutely as not to move other elements with them). And we would have a list of these stacked boxes

## Blogs Map or graph
Perhaps I should create some cool graph for fun, which will connect the graphs to tell which topics you can learn and how, this would be unique, like graph them all, how a person should read, them topic wise, with lines conecting to blogs, and going on paths

# Testing
- Test components with javascript based animations
- Test API calls 
- Test functions that contain business logic

# New Logo

Checkout sketches you made in the copy

# Showcase section
section on home page, that shows all my cool projects I have undertaken. Or perhaps this should be in portfolio, or in both

# SEO
There are a lot of possible SEO improvements, 

1. keyword research, and then using appropriate words in alts, headings, paragraphs e.t.c
2. using appropriate semantic element, which will help google bot to figure out website, for example, should the headers in arc be h2 or h3, what about seamless section, what about the section element, should I use a footer element, or other elements used to define articles or aside element e.t.c
3. figuring out how seo works with videos

## Guidelines
(got this from discord)
Descriptive links
Grouping similar content under the same directories
No duplicate content
Follow accessibility and semantic standards
Avoid spamming ads
Good internal linking with good link texts
Optimize media and add good alt texts
Add distinct meta title and description tags to every page
Use subdomains instead of subdirectories when it makes sense
Backlinks, backlinks, backlinks

## Implement these

Make your content structuted using schema.org

add a footer, that all other websites add with a lot of links, and learn how it works. It may also have to do something with those links that appear below the main link of your site

### Implementing structured data

As far as I see, not everything needs to be structured. For example hero page does not seem to need structuring. Following are the things that I may need to structure

Article, BreadCrumb, FAQ, Image metadata (seems more than just alt), Organization (becareful with this one as it may have legal implications). Profile page (for hero page maybe)

somehow tell google that the tags on your article are hashtags, keywords for the article

## Notes

Heading hierarchy doesn't really make a difference just use h1, for main heading, and h2 for the rest
Each page should have it's own description and title
You may need to submit a sitemap to get your website crawled by google, and you may need to do it again when content changes
`rel="nofollow"` should be added to links inside user uploaded content
Block access to URL's that change state like creating accounts
There is a whole guide on multiple languages on one website
don't show duplicate content
link your website's pages, so your website gets indexed
using varying words, is better

### When to use article, section, div
Would the content would make sense on its own in a feed reader? If so use <article>
Is the content related? If so use <section>
Finally if there’s no semantic relationship use <div>
maybe setup hosting already, to test structured data

# Background
thinking of making a slick video for backgroud, with black overlay on top, and give heading dark glow

Or perhaps, add multiple diagnol screenshots, or computer displaying some thing

# Arc
make an arc section that sticks with an arc facing towards right, with scrolling-fading picture and text (paragraph, heading), inside and outside respectively. it should have lines connecting to topics, with a highlight radient gradient, on the line with current topic

This section should link to blog page at various places, with each place representing the topic on the arc

# Seemless lines
add a seemless section with lines as seperators, each with heading, text and simple illustrative picture to tell what it's about

This section to lead to my freelancing, neural nexus institute , and github

improve the github area by changing the background, and added 3d looking paths, and a spheres
