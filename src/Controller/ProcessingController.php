<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ProcessingController extends AbstractController
{
    public function index(): Response
    {

        return $this->render('p5.html.twig');
    }
}