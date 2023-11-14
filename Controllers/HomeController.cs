using CRMTest2.Core;
using CRMTest2.Core.Interfaces;
using CRMTest2.Models;
using CRMTest2.Models.Enities;
using CRMTest2.Views.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CRMTest2.Controllers
{
    public class HomeController : AppBaseController
    {
        public HomeController(ILogger<HomeController> logger) : base(logger) 
        {
        }

        public IActionResult Index()
        {
            return RedirectToAction("Index", "Contact");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}