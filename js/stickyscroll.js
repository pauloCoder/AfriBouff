window.onscroll = function(){sticky()};

let header = document.getElementById("sticky-header");
//let footer = document.getElementById("groupe-section");
let stickyComponent = header.offsetTop;
//let stickyFooter = footer.offsetHeight;

function sticky()
{
    /*console.log("Sticky comp : " + stickyComponent);
    console.log("Sticky foot : " + (footer.offsetHeight - stickyComponent));
    console.log("Sticky footer : " + stickyFooter);
    console.log(`window : ${window.pageYOffset}`);*/
    if (window.pageYOffset > stickyComponent)
    {
        header.classList.add("sticky");
    }
    else
    {
        header.classList.remove("sticky");
    }

    /*
    if (window.pageYOffset > stickyFooter)
    {
        header.classList.remove("sticky");
    }
    else
    {
        header.classList.add("sticky");
    }
    */
}