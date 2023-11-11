using CRMTest2.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace CRMTest2.Core
{
    public class AppBaseController : Controller
    {
        protected readonly ILogger<HomeController> _logger;


        public AppBaseController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
    }
}
