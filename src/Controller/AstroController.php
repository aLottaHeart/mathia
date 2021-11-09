<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AstroController extends AbstractController
{
    public function list(Request $request): Response
    {
        $img_names = [
            0 => 'tree',
            1 => 'jupiter_saturn',
            2 => 'andromeda'
        ];

        $img_id = $request->get('img_id');
        if (!$img_id || $img_id < 0) {
            $img_id = 0;
        }
        $img_id = min($img_id, count($img_names)-1);

        return $this->render(sprintf('astro/%s.html.twig', $img_names[$img_id]), [
            'img_id' => $img_id
        ]);
    }
}