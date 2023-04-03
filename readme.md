# Outils Chinois

☠☠☠☠☠

Checklist:
- [ ] Add every chapter worked on this year
	- [ ] Add Student Life chapter
	- [ ] Add Minichapters ("Taboo" for instance)
	- [ ] Add more content to each chapter
	- [ ] Make individual chapters more interactive
	- [ ] Mobile version

- [ ] Update Flashcards page
	- [ ] Add different modes (pinyin/character hidden, toggleable)
	- [ ] Add more vocab sets
	- [ ] Finish adding the LVB vocab (currently only up to C (exclusive))
	- [ ] Renew the design (looks old/boring compared to rest)
	- [ ] import CJST using npm (is equivalent to pinyin library python)
	- [ ] Finish adding custom set page
		- [ ] add an intuitive way to access the page
		- [x] find a good way to save the sets (somehow condense the data into a small code if possible)
		- [x] implement the data condenser (char -> decimal unicode -> base 36 (and subtracting 2000))
		- [ ] actually implement the saving of sets
		- [x] add a way to modify current words
		- [ ] add cancel button for modifying
		- [ ] make the page prettier
		- [ ] add decoder to /flashcards/ to actually use the sets (requires CJST for pinyin)
		- [ ] mobile version

- [ ] Finish text editor page
	- [x] Add buttons (currently only through console)
	- [x] Add labels and whatnot
	- [ ] Add a way to generate pdf file with content (red text instead of red background)
	- [ ] Seperate active (default) and passive (blue)
	- [ ] *maybe* try to find a way to translate characters that aren't in the list
	- [ ] Mobile version

- [ ] Miscellaneous
	- [ ] Make settings save when clicking on button
	- [x] Finish implementing Settings
		- [x] change theme
		- [x] disable cursor trailer

	- [ ] Make light theme prettier for pages
		- [ ] flashcards page (needs redesign first)
		- [ ] text editor page
		- [ ] chapter pages

--
Complété: (8/37) \* 100 ~= 21.621%

Bugs:
- [x] Flashcard set inconsistencies
- [x] Frontpage weird background on elements after window resize
- [x] Cookies not working at all (oopsie)